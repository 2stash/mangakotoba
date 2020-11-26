import {SET_STATE} from "../types";

export default(state,action) => {
  const { type, payload } = action;
  switch(type){
    case SET_STATE:
      return {
        ...state,
        books: payload,
        loading: false,
      }
  }
}