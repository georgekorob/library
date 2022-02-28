import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import AuthorList from './components/Author.js';
import BookList from "./components/Book.js";
import NotFound404 from "./components/NotFound404";
import LoginForm from "./components/Auth";
import Cookies from "universal-cookie";
import {HashRouter, Route, BrowserRouter, Link, Switch, Redirect} from "react-router-dom";
import AuthorsBookList from "./components/AuthorBooks";

const urlApi = 'http://127.0.0.1:8000/api/'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'authors': [],
            'books': [],
            'token': '',
        }
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {
            username: username,
            password: password
        }).then(response => {
            // console.log(response.data['token'])
            this.set_token(response.data['token'])
        }).catch(error => alert('Неверный логин или пароль'))
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
        // localStorage.setItem('token',token)
        // let token_ = localStorage.getItem('token')
        // document.cookie = `token=${token},username=...,password=...`
    }

    logout() {
        this.set_token('')
    }

    get_token_from_cookies() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    load_data() {
        const headers = this.get_headers()
        axios.get(`${urlApi}authors/`, {headers}).then(response => {
            this.setState({
                'authors': response.data
            })
        }).catch(error => {
            console.log(error)
            this.setState({'authors': []})
        });
        axios.get(`${urlApi}books/`, {headers}).then(response => {
            this.setState({
                'books': response.data
            })
        }).catch(error => {
            console.log(error)
            this.setState({'books': []})
        });
    }

    get_headers() {
        let headers = {'Content-Type': 'application/json'}
        if (this.is_auth()) {
            headers['Authorization'] = `Token ${this.state.token}`
        }
        return headers
    }

    is_auth() {
        return !!this.state.token;
    }

    componentDidMount() {
        this.get_token_from_cookies()
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Authors</Link>
                            </li>
                            <li>
                                <Link to='/books'>Books</Link>
                            </li>
                            <li>
                                {this.is_auth() ? <button onClick={() => this.logout()}>Logout</button> :
                                    <Link to='/login'> Login </Link>}
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/'>
                            <AuthorList authors={this.state.authors}/>
                        </Route>
                        <Route exact path='/books' component={() => <BookList books={this.state.books}/>}/>
                        <Route path='/author/:id'>
                            <AuthorsBookList books={this.state.books} authors={this.state.authors}/>
                        </Route>
                        <Route exact path='/login'>
                            <LoginForm get_token={(username, password) => this.get_token(username, password)}/>
                        </Route>
                        <Redirect from='/authors' to='/'/>
                        <Route component={NotFound404}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
