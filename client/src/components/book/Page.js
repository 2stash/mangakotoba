import React, {useState, useContext} from 'react'
import BookContext from '../../context/bookcontext/bookContext';


const Page = (props) => {
  const bookContext = useContext(BookContext);
  const {books} = bookContext;
  const {pageNumber, bookTitle} = props;

  if(books && !books.books[bookTitle][1].pages[pageNumber] ){
    return "no vocab for this page"
  }
  return (
    <div>
      <p>Get Reading</p>
      {books && books.books[bookTitle][1].pages[pageNumber].vocab.map((word, index) => (
        <div key={index }>
        <p>{Object.keys(word)}: {word[Object.keys(word)]}</p>
        </div>
      ))}
    </div>
  )
}

export default Page
