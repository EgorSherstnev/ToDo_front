import {put, takeEvery, call} from "redux-saga/effects"
import { FETCH_LISTS, UPLOAD_NEW_LIST } from "../actions/types"
import { setLists, createList, } from "../actions" 
import { createListAPI, getAllLists } from "../http/taskAPI"

function* fetchGetListsWorker() {
   const data = yield call(getAllLists)
   console.log(data)
   yield put(setLists(data))
}

function* uploadNewListWorker(action) {
   try {
      //const {taskList} = action.payload;
      const taskList = action.payload;
      console.log("Received taskList in saga:", taskList);
      const data = yield call(createListAPI, taskList);
      console.log("Received data from server:", data);
      yield put(createList(data))
   } catch (error) {
      console.error("ERROR uploading list:", error)
   }
}

export function* getListsWatcher() {
   yield takeEvery(FETCH_LISTS, fetchGetListsWorker)
}

export function* uploadNewListWatcher() {
   yield takeEvery(UPLOAD_NEW_LIST, uploadNewListWorker);
}