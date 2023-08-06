import $api from "./index"

export const getAllLists = async () => {
   const response = await $api.get('api/list/get_all_lists')
   return response.data
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