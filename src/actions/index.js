import { CREATE_LIST, 
   FETCH_LISTS, 
   FETCH_TASKS, 
   SET_LISTS, 
   SET_SELECTED_LIST_ID, 
   SET_TASKS, 
   UPLOAD_NEW_LIST 
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