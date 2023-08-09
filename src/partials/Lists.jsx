import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetLists, resetTasks, setListId, updateList } from '../actions';
import { fetchGetTasks } from '../actions';
import { deleteListAPI, getAllTasks, getTasksByList } from '../http/taskAPI';

const Lists = () => {
   const [selectedListId, setSelectedListId] = useState('');

   const dispatch = useDispatch();
   const listsTasks = useSelector(state => state.listsReducer.lists);


   const handleListSelect = (event) => {
      const listId = event.target.value;
      setSelectedListId(listId);
      console.log("Selected listId:", listId);
      
      const action = { type: 'FETCH_TASKS', payload: { listId } }; //ИСПРАВИТЬ!!!
      dispatch(action); // Диспатч действия с выбранным listId в качестве полезной нагрузки
      dispatch(setListId(listId))
   };

   const handleDeleteLists = async(event) => {
      event.preventDefault();
      try {
         console.log(selectedListId);
         await deleteListAPI(selectedListId)
         dispatch(fetchGetLists())
         dispatch(resetTasks())
      } catch (e) {
         alert(e.response.data.message)
      }
   }

   const handleUpdateList = async(event) => {
      event.preventDefault();
      try {
         console.log(selectedListId);
         console.log(listsTasks)
         const selectedList = listsTasks.find(list => list.id === parseInt(selectedListId));
         console.log(selectedList);
         if (selectedList) {
            const updatedList = {
               id: selectedList.id,
               taskList: selectedList.taskList // Используем значение из выбранного списка
            };
            dispatch(updateList(updatedList));
            console.log(updatedList);
         }
      } catch (e) {
         alert(e.response.data.message)
      }
   }



   // const click = async(e) => {
   //    e.preventDefault();
   //    try {
   //       console.log(selectedListId)
   //       let data = await getTasksByList({ listId: selectedListId });
   //       //let data = await getAllTasks()
   //       console.log(data)
   //    } catch (e) {
   //       alert(e.response.data.message)
   //    }
   // }

   return (
      <div className='lists__container lists'>
         <h2 className='lists__subtitle subtitle'>
            Task lists
         </h2>
         <select 
            className='lists__drop'
            onChange={handleListSelect}
         >
            {/* Отображение списка списков в выпадающем списке */}
            {listsTasks.map((list) => (
               <option 
                  key={list.id} 
                  value={list.id}
               >
                  {list.taskList}
               </option>
            ))}
         </select>
         <div className='lists__buttons'>
            <button 
               className="button"
               onClick={handleUpdateList}
            >
               Edit the list
            </button>
            <button 
               className="button button-delete"
               onClick={handleDeleteLists}
            >
               Delete a list
            </button>
         </div>
            
      </div>
   );
};

export default Lists;