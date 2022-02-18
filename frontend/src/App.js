import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import AuthorList from './components/Author.js';
import BookList from "./components/Book.js";
import {HashRouter, Route, BrowserRouter, Link} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'authors': [],
      'books': [],
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/authors/').then(response => {
      this.setState({
        'authors': response.data
      })
    }).catch(error => console.log(error));
    axios.get('http://127.0.0.1:8000/api/books/').then(response => {
      this.setState({
        'books': response.data
      })
    }).catch(error => console.log(error))
  }

  render () {
    return (
        <div>
          <HashRouter>
            <Route exact path='/' component={() =><AuthorList authors={this.state.authors} />}/>
            <Route exact path='/books' component={() => <BookList books={this.state.books} />}/>
          </HashRouter>
        </div>
    )
  }
}

export default App;
