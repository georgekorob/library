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

  load_data(){
    axios.get(`${urlApi}authors/`).then(response => {
      this.setState({
        'authors': response.data
      })
    }).catch(error => console.log(error));
    axios.get(`${urlApi}books/`).then(response => {
      this.setState({
        'books': response.data
      })
    }).catch(error => console.log(error))
  }

  set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({'token': token},()=>this.load_data())
    console.log(this.state.token)
    // localStorage.setItem('token',token)
    // let token_ = localStorage.getItem('token')
    // document.cookie = `token=${token},username=...,password=...`
  }

  get_token_from_cookies(){
    const cookies = new Cookies()
    const token =  cookies.get('token')
    this.setState({'token': token})
  }

  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {
      username: username,
      password: password
    }).then(response => {
      // console.log(response.data['token'])
      this.set_token(response.data['token'])
    }).catch(error => console.log(error))
  }

  componentDidMount() {
    this.get_token_from_cookies()
    this.load_data()
  }

  render () {
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
                  <Link to='/login'>Login</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path='/'>
                <AuthorList authors={this.state.authors} />
              </Route>
              <Route exact path='/books' component={() => <BookList books={this.state.books} />}/>
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
