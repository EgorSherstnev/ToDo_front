import {applyMiddleware, combineReducers, createStore} from "redux";
import listsReducer from './listsReducer'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
   listsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)