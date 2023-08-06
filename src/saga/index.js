import { all } from "redux-saga/effects";
import { getListsWatcher, uploadNewListWatcher } from "./listSaga";
import { getTasksByListWatcher, uploadNewTaskWatcher } from "./taskSaga";

export function* rootWatcher() {
   yield all([
      getListsWatcher(), 
      uploadNewListWatcher(),
      getTasksByListWatcher(),
      uploadNewTaskWatcher()
   ])
}