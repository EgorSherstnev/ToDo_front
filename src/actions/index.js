import { CREATE_LIST, 
   DELETE_TASK, 
   DELETE_TASK_SUCCESS, 
   FETCH_LISTS, 
   FETCH_TASKS, 
   NEW_TASK, 
   REQUEST_DELETE_LIST, 
   REQUEST_DELETE_TASK, 
   RESET_TASKS, 
   RESET_UPDATE_LIST, 
   SET_LISTS, 
   SET_SELECTED_LIST_ID, 
   SET_TASKS, 
   UPDATE_LIST, 
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

export const requestDeleteList = list => ({
   type: REQUEST_DELETE_LIST,
   payload:list,
})

export const updateList = list => ({
   type: UPDATE_LIST,
   payload: list,
});

export const resetUpdateList = () => ({
   type: RESET_UPDATE_LIST
});
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

export const deleteTask = task => ({
   type: DELETE_TASK,
   payload:task,
})

export const requestDeleteTask = task => ({
   type: REQUEST_DELETE_TASK,
   payload:task,
})

export const deleteTaskSuccess = (unicId) => ({
   type: DELETE_TASK_SUCCESS,
   payload: unicId,
});

export const resetTasks = () => ({
   type: RESET_TASKS,
});