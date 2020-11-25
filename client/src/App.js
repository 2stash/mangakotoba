import "./App.css";
import STORE from "./STORE";
import React, { useState, useEffect, useContext } from "react";
import Book from './components/Book';
import BookContext from './context/bookcontext/bookContext';

const App = () => {
const bookContext = useContext(BookContext);
const {setInitialState} = bookContext;

useEffect(() => {
  setInitialState(STORE)
},[])

  return (
    <Book />
  )
}

export default App;
