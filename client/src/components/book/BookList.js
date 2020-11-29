import React, { useContext } from "react";
import BookContext from "../../context/bookcontext/bookContext";
import { Link } from "react-router-dom";

const BookList = ({ match }) => {
  const bookContext = useContext(BookContext);
  const { books } = bookContext;
  const seriesTitle = match.params.seriesTitle;
  
  return (
    <div className="books-container ">
      {books ? (
        books[seriesTitle].list.map((title, index) => (
          <div key={title} className="books-display-image books-display">
            <Link to={{ pathname: `/booklist/${seriesTitle}/${title}` }}>
              <img src={books.books[title][1].image} alt='One Piece' />
            </Link>
            <h4>One Piece 1</h4>
          </div>
        ))
      ) : (
        <p>null!</p>
      )}
      
    </div>
  );
};

export default BookList;
