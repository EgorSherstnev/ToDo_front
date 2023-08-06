import { 
   NEW_TASK,
   SET_TASKS
} from "../actions/types";

const initialState = {
   tasks: []
}

export default function taskReducer(state = initialState, action) {
   switch (action.type) {
      case SET_TASKS:
         return {...state, tasks:action.payload };
      case NEW_TASK:
         return {...state, tasks: state.tasks.concat(action.payload) };
      default:
         return state;
   }
}