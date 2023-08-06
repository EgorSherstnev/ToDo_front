import { all } from "redux-saga/effects";
import { getListsWatcher } from "./listSaga";
import { getTasksByListWatcher } from "./taskSaga";

export function* rootWatcher() {
   yield all([
      getListsWatcher(), 
      getTasksByListWatcher()
   ])
}