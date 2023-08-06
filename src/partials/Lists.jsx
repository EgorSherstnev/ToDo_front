import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setListId } from '../actions';
import { fetchGetTasks } from '../actions';
import { getAllTasks, getTasksByList } from '../http/taskAPI';

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
      <div>
         {/* <button 
            className="button"
            onClick={click}
         >
            Получить задачи
         </button> */}
         <h2>Списки задач</h2>
         <select onChange={handleListSelect}>
            {/* Отображение списка списков в выпадающем списке */}
            {listsTasks.map((list) => (
               <option key={list.id} value={list.id}>
                  {list.taskList}
               </option>
            ))}
         </select>
      </div>
   );
};

export default Lists;