import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lists = () => {
  // Состояние для хранения списка списков
   const [lists, setLists] = useState([]);

  // Загрузка списков с сервера при монтировании компонента
   useEffect(() => {
      fetchLists();
   }, []);

  // Функция для загрузки списков с сервера
   const fetchLists = async () => {
      try {
         const response = await axios.get('/api/lists'); 
         setLists(response.data);
      } catch (error) {
         console.error('Ошибка при загрузке списков:', error);
      }
   };

   return (
      <div>
         <h2>Списки задач</h2>
         <select>
         {/* Отображение списка списков в выпадающем списке */}
         {lists.map((list) => (
            <option key={list.id} value={list.id}>
               {list.name}
            </option>
         ))}
         </select>
      </div>
   );
};

export default Lists;