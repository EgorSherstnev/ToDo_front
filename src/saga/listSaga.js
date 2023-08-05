import {put, takeEvery, call} from "redux-saga/effects"
import { FETCH_LISTS } from "../actions/types"
import { setLists } from "../actions" 
import { getAllLists } from "../http/taskAPI"

function* fetchGetListsWorker() {
   const data = yield call(getAllLists)
   console.log(data)
   yield put(setLists(data))
}

export function* getListsWatcher() {
   yield takeEvery(FETCH_LISTS, fetchGetListsWorker)
}