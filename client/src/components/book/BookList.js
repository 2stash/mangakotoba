import React, { useContext } from "react";
import BookContext from "../../context/bookcontext/bookContext";
import { Link } from "react-router-dom";

const BookList = ({ match }) => {
  const bookContext = useContext(BookContext);
  const { books } = bookContext;
  const seriesTitle = match.params.seriesTitle;
  
  return (
    <div className="books-container">
    <h2>Choose a Volume</h2>
    <div className="books-flex-col ">
      {books ? (
        books[seriesTitle].list.map((title, index) => (
          
          <div key={title} className="books-display-image books-display">
            <Link to={{ pathname: `/booklist/${seriesTitle}/${title}`, title:{title} }}>
              <img src={books.books[title][1].image} alt='book cover' />
            </Link>
            <h4>{title}</h4>
          </div>
        ))
      ) : (
        <p>null!</p>
      )}
      </div>
    </div>
  );
};

export default BookList;
