import { FETCH_LISTS, SET_LISTS } from "./types";

export const setLists = list => ({
   type: SET_LISTS,
   payload: list,
})

export const fetchGetLists = () => ({
   type: FETCH_LISTS,
})