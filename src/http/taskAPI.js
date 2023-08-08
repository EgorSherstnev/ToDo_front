import $api from "./index"

export const getAllLists = async () => {
   const {data} = await $api.get('api/list/get_all_lists')
   return data
}

export const createListAPI = async(taskList) => {
   const {data} = await $api.post('api/list/create', {taskList})
   return data
}

export const deleteListAPI = async (id) => {
   console.log("listId  в  deleteListAPI:", id)
   const response = await $api.delete(`api/list/delete/${id}`);
   return response.data;
}

//---Lists---//
export const createTaskAPI = async (listId, taskName, taskDescription) => {
   const {data} = await $api.post('api/task/create', {listId, taskName, taskDescription:'null'})
   return data
}

export const getTasksByList = async (listId) => {
   console.log("listId  в  getTasksByList:", listId)
   const response = await $api.get('api/task/get_tasks_by_list', {
      params: { listId },
   });
   return response.data
}

export const getAllTasks = async() => {
   const response = await $api.get('api/task/get_all_tasks')
   return response.data
}

export const deleteTaskAPI = async (unicId) => {
   const response = await $api.delete(`api/task/delete/${unicId}`);
   return response.data;
}