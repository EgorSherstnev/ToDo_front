import { all } from "redux-saga/effects";
import { getListsWatcher, uploadNewListWatcher } from "./listSaga";
import { getTasksByListWatcher } from "./taskSaga";

export function* rootWatcher() {
   yield all([
      getListsWatcher(), 
      uploadNewListWatcher(),
      getTasksByListWatcher()
   ])
}