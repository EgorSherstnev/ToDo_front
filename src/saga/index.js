import { all } from "redux-saga/effects";
import { getListsWatcher, uploadNewListWatcher } from "./listSaga";
import { deleteTaskWatcher, getTasksByListWatcher, uploadNewTaskWatcher } from "./taskSaga";

export function* rootWatcher() {
   yield all([
      getListsWatcher(), 
      uploadNewListWatcher(),
      getTasksByListWatcher(),
      uploadNewTaskWatcher(),
      deleteTaskWatcher()
   ])
}