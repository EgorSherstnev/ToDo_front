import {
   put, 
   takeEvery, 
   call
} from "redux-saga/effects"

import { 
   FETCH_TASKS, 
   REQUEST_DELETE_TASK, 
   SET_TASKS, 
   UPLOAD_NEW_TASK 
} from "../actions/types"

import { 
   createTask, 
   deleteTaskSuccess, 
   setTasks 
} from "../actions"

import { 
   createTaskAPI, 
   deleteTaskAPI, 
   getTasksByList 
} from "../http/taskAPI"

function* fetchGetTasksByListWorker(action) {
   try {
      const { listId } = action.payload;
      console.log("Received listId in saga:", listId);
      const data = yield call(getTasksByList, listId);
      console.log("Received data from server:", data);
      yield put(setTasks(data));
   } catch (error) {
      console.error("Error fetching tasks:", error);
   }
}

function* uploadNewTaskWorker(action) {
   try {
      console.log('action.payload in saga:',action.payload)
      const {listId, taskName, taskDescription} = action.payload;
      //const taskList = action.payload;
      console.log("Received taskList in saga:", listId, taskName, taskDescription);
      const data = yield call(createTaskAPI, listId, taskName, taskDescription);
      console.log("Received data from server:", data);
      yield put(createTask(data))
   } catch (error) {
      console.error("ERROR uploading list:", error)
   }
}

function* deleteTaskWorker(action) {
   try {
      const unicId = action.payload;
      console.log(" unicId in saga:", unicId);
      yield call(deleteTaskAPI, unicId);
      yield put(deleteTaskSuccess(unicId));
   } catch (error) {
      console.error("ERROR deleting task:", error);
   }
}

export function* getTasksByListWatcher() {
   yield takeEvery(FETCH_TASKS, fetchGetTasksByListWorker);
}

export function* uploadNewTaskWatcher() {
   yield takeEvery(UPLOAD_NEW_TASK, uploadNewTaskWorker);
}
export function* deleteTaskWatcher() {
   yield takeEvery(REQUEST_DELETE_TASK, deleteTaskWorker);
}