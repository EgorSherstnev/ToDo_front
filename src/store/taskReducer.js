import { 
   DELETE_TASK,
   NEW_TASK,
   SET_TASKS,
   DELETE_TASK_SUCCESS 
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
      case DELETE_TASK:
         const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
         return { ...state, tasks: updatedTasks };
      case DELETE_TASK_SUCCESS:
         const unicId = action.payload;
         return {
            ...state,
            tasks: state.tasks.filter((task) => task.unicId !== unicId),
         };
      default:
         return state;
   }
}