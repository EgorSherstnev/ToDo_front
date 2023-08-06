import {put, takeEvery, call} from "redux-saga/effects"
import { FETCH_TASKS } from "../actions/types"
import { setTasks } from "../actions"
import { getTasksByList } from "../http/taskAPI"

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

export function* getTasksByListWatcher() {
   yield takeEvery(FETCH_TASKS, fetchGetTasksByListWorker);
}