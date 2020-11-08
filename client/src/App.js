import "./App.css";
import STORE from "./STORE";
import React, { useState, Component } from "react";
import Book from './components/Book';

class App extends Component {

  state = {
    books:STORE
  }

  


  render() {
    return (
    <div className='App'>
      {console.log(this.state.books.books[0])}
    </div>)
  }
}

export default App;
