import React, {useReducer} from 'react';
import BookContext from './bookContext';
import BookReducer from './bookReducer';
import {SET_STATE,} from '../types';

const BookState = props => {
  const initialState = {
    books: null,
    book: null,
    loading: false,
  }

  const [state, dispatch] = useReducer(BookReducer, initialState);
  
  const setInitialState = (value) => {
    dispatch({type: SET_STATE, payload:{value}})
  }

  return <BookContext.Provider 
    value={{
      books: state.books,
      book: state.book,
      loading: state.loading,
      setInitialState,
    }}
  >
    {props.children}
  </BookContext.Provider>
}


export default BookState;