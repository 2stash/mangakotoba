import React, {useReducer} from 'react';
import BookContext from './bookContext';
import BookReducer from './bookReducer';
import {SET_STATE,SET_LOCALSTORAGE} from '../types';

const BookState = props => {
  const initialState = {
    books: null,
    book: null,
    loading: false,
    currentReadings: [],
  }

  const [state, dispatch] = useReducer(BookReducer, initialState);
  
  const setInitialState = (data) => {
    dispatch({type: SET_STATE, payload:data})
  }

  const setCurrentReadings =(data) => {
    dispatch({type: SET_LOCALSTORAGE, payload: data})
  }

  return <BookContext.Provider 
    value={{
      books: state.books,
      book: state.book,
      loading: state.loading,
      currentReadings: state.currentReadings,
      setCurrentReadings,
      setInitialState,
    }}
  >
    {props.children}
  </BookContext.Provider>
}


export default BookState;