import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BookState from "./context/bookcontext/BookState";

ReactDOM.render(
  <React.StrictMode>
    <BookState>
      <App />
    </BookState>
  </React.StrictMode>,
  document.getElementById("root")
);
