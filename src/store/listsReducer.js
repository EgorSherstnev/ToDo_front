import { 
   CREATE_LIST,
   RESET_UPDATE_LIST,
   SET_LISTS,
   SET_SELECTED_LIST_ID,
   UPDATE_LIST,
} from "../actions/types";

const initialState = {
   lists: [],
   selectedListId: null,
   updateList: null,
}

export default function listsReducer(state = initialState, action) {
   switch (action.type) {
      case SET_LISTS:
         return {...state, lists:action.payload };
      case CREATE_LIST:
         return {...state, lists: state.lists.concat(action.payload) };
      case SET_SELECTED_LIST_ID:
         return {...state, selectedListId:action.payload }
      case UPDATE_LIST:
         console.log("UPDATE_LIST action:", action.payload);
         return {...state, updateList:action.payload }
      case RESET_UPDATE_LIST:
         return {...state, updateList: null }
      default:
         return state;
   }
}