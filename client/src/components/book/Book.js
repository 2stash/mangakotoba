import React, {useState, useContext} from 'react'
import BookContext from '../../context/bookcontext/bookContext';
import Page from './Page';

const Book = ({match}) => {
  const bookContext = useContext(BookContext);
  const {books} = bookContext;
  
  const bookTitle = match.params.bookTitle;

  const [page, setPage] = useState(1);



  return (
    <div>
      <Page pageNumber={page} bookTitle={bookTitle} key={bookTitle-`${page}`}/>
    </div>
  )
}

export default Book
