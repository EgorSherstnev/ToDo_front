import { 
   CREATE_LIST,
   SET_LISTS,
   SET_SELECTED_LIST_ID,
} from "../actions/types";

const initialState = {
   lists: [],
   selectedListId: null,
}

export default function listsReducer(state = initialState, action) {
   switch (action.type) {
      case SET_LISTS:
         return {...state, lists:action.payload };
      case CREATE_LIST:
         return {...state, lists: state.lists.concat(action.payload) };
      case SET_SELECTED_LIST_ID:
         return {...state, selectedListId:action.payload }
      default:
         return state;
   }
}