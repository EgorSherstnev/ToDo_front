import { CREATE_LIST, 
   FETCH_LISTS, 
   FETCH_TASKS, 
   NEW_TASK, 
   SET_LISTS, 
   SET_SELECTED_LIST_ID, 
   SET_TASKS, 
   UPLOAD_NEW_LIST, 
   UPLOAD_NEW_TASK
} from "./types";

export const setLists = list => ({
   type: SET_LISTS,
   payload: list,
})

export const fetchGetLists = () => ({
   type: FETCH_LISTS,
})

export const createList = list => ({
   type: CREATE_LIST,
   payload: list,
})

export const uploadNewList = list => ({
   type: UPLOAD_NEW_LIST,
   payload: list,
})
//----------------------------//

export const setListId = listId => ({
   type: SET_SELECTED_LIST_ID,
   payload: listId,
});

//----------------------------//
export const setTasks = task => ({
   type: SET_TASKS,
   payload: task,
})

export const fetchGetTasks = () => ({
   type: FETCH_TASKS,
})

export const createTask = task => ({
   type: NEW_TASK,
   payload: task,
})

export const uploadNewTask = task => ({
   type: UPLOAD_NEW_TASK,
   payload:task,
})