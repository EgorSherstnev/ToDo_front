import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Lists = () => {
//   // Состояние для хранения списка списков
//    const [lists, setLists] = useState([]);

//   // Загрузка списков с сервера при монтировании компонента
//    useEffect(() => {
//       fetchLists();
//    }, []);

//   // Функция для загрузки списков с сервера
//    const fetchLists = async () => {
//       try {
//          const response = await axios.get('http://localhost:5000/api/task/get_all_lists'); 
//          setLists(response.data);
//       } catch (error) {
//          console.error('Ошибка при загрузке списков:', error);
//       }
//    };

   const listsTasks = useSelector(state => state.listsReducer.lists)

   return (
      <div>
         <h2>Списки задач</h2>
         <select>
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