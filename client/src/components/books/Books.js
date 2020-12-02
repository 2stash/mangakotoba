import React, { useState, useContext } from "react";
import BookContext from "../../context/bookcontext/bookContext";
import {Link} from 'react-router-dom';

const Books = () => {
  const [search, setSearch] = useState("");

  const bookContext = useContext(BookContext);
  const { books } = bookContext;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };


  return (
    <div className="books-container">
    <h2>Choose a Series</h2>
    <div className="books-search">
      <input
        type='text'
        onChange={handleSearch}
        value={search}
        placeholder='Search Book Title'
      />
      <p>{search}</p>
      </div>
      <div className="books-display-image">
        {books ?
          books.booklist.map((title) => (
              <div key={title} className="books-display">
                <Link to={{pathname: `/booklist/${title}`}}><img src={books[title].image} alt='One Piece' /></Link>
                <h4>{books.nameconversion[title]}</h4>
              </div>
            )
          ) : <p>null!</p>}
      </div>
    </div>
  );
};

export default Books;
