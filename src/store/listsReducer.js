import { 
   SET_LISTS 
} from "../actions/types";

const initialState = {
   lists: []
}

export default function listsReducer(state = initialState, action) {
   switch (action.type) {
      case SET_LISTS:
         return {...state, lists:action.payload };
      default:
         return state;
   }
}