import React, {useContext} from 'react'
import scheduleContext from '../context/bookcontext/bookContext';
import BookContext from '../context/bookcontext/bookContext';

const Book = () => {
  const bookContext = useContext(BookContext);
  const {books} = bookContext;

  console.log(books)
  return (
    <div>
      
    </div>
  )
}

export default Book
