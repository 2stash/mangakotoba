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

  // let image;
  // if(books){
  //   image = books.books.naruto.image
  //   // image = books.image;
  //   console.log(image)
  // }
  // const narutoimage = books.image;
  return (
    <div>
      <input
        type='text'
        onChange={handleSearch}
        value={search}
        placeholder='Search Book Title'
      />
      <p>{search}</p>
      <div>
        {books ?
          books.booklist.map((title) => (
              <div key={title} className="books-image">
                <Link to={{pathname: `/book/${title}`}}><img src={books.books[title].image} alt='Naruto' /></Link>
              </div>
            )
          ) : <p>null!</p>}
      </div>
    </div>
  );
};

export default Books;
