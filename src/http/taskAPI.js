import $api from "./index"

export const getAllLists = async () => {
   const response = await $api.get('api/task/get_all_lists')
   return response.data
}