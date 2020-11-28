import {SET_STATE,SET_LOCALSTORAGE} from "../types";

export default(state,action) => {
  const { type, payload } = action;
  switch(type){
    case SET_STATE:
      return {
        ...state,
        books: payload,
        loading: false,
      }
    case SET_LOCALSTORAGE:
      return {
        ...state,
        currentReadings: payload
      };
    default:
      return {...state}
  }
}