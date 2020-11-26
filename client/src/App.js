import "./App.css";
import STORE from "./STORE";
import React, { Fragment, useEffect, useContext } from "react";

import BookContext from "./context/bookcontext/bookContext";
import Navbar from "./components/nav/Navbar";
import Home from "./components/Home/Home";
import Book from "./components/book/Book";
import Books from "./components/books/Books";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  const bookContext = useContext(BookContext);
  const { setInitialState } = bookContext;

  useEffect(() => {
    setInitialState(STORE);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Router>
        <Navbar />
        <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/books" component={Books} />
          <Route path="/book/:bookTitle" component={Book}/>
        </Switch>
      </div>
      </Router>
    </Fragment>
  );
};

export default App;