import {applyMiddleware, combineReducers, createStore} from "redux";
import listsReducer from './listsReducer'
import taskReducer from "./taskReducer";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
   listsReducer,
   taskReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)