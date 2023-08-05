import { all } from "redux-saga/effects";
import { getListsWatcher } from "./listSaga";

export function* rootWatcher() {
   yield all([getListsWatcher()])
}