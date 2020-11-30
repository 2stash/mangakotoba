import React, { useState, useContext, useEffect } from "react";
import BookContext from "../../context/bookcontext/bookContext";
import Page from "./Page";

const Book = ({ match }) => {
  const bookContext = useContext(BookContext);
  const { books, setCurrentReadings } = bookContext;
  const bookTitle = match.params.bookTitle;
  // const [page, setPage] = useState(1);
  // const pageTwo = page + 1;

  // useEffect(() => {
  //   setCurrentReadings({book: bookTitle, page: page})
  // },[])

  // const handlePrevPage = () => {
  //   if(page === 1) return;
  //   setPage(page-1);
  // }

  // const handleNextPage = () => {
  //   const lastPage = Object.keys(books.books[bookTitle][1].pages).length;
  //   if(page >= (lastPage -1)) return 
  //   setPage(page+1)
  // }

  return (
    <div className="flex-column">
      <div className="book-page-container">
        <div className="page-container">
        <Page
          // pageNumber={page}
          bookTitle={bookTitle}
          // key={bookTitle + `${page}`}
        />
        </div>
        {/* <div className="page-container">
        <Page
          pageNumber={pageTwo}
          bookTitle={bookTitle}
          key={bookTitle + `${pageTwo}`}
        />
        </div> */}
      </div>
      {/* <div className="page-turner">
        <button onClick={handlePrevPage}><i className="fas fa-arrow-left"></i> Prev</button>
        <span>Page {page} - {pageTwo}</span>
        <button onClick={handleNextPage}><i className="fas fa-arrow-right"></i> Prev</button>
      </div> */}
    </div>
  );
};

export default Book;
