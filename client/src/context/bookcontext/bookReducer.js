import {SET_STATE} from "../types";

export default(state,action) => {
  switch(action.type){
    case SET_STATE:
      return {
        ...state,
        books: action.payload,
        loading: false,
      }
  }
}