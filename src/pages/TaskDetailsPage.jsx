import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTaskAPI } from '../http/taskAPI'; // Импортируйте вашу функцию обновления задачи

const TaskDetailsPage = () => {
  const { unicId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Используем селектор для получения данных по unicId из хранилища
  const selectTaskById = (state, unicId) => {
    // Ищем задачу с заданным unicId в массиве tasks
    return state.taskReducer.tasks.find(task => task.unicId === unicId);
  };
  const task = useSelector(state => selectTaskById(state, unicId));

  // Состояния для хранения значений taskName и taskDescription
  const [taskName, setTaskName] = useState('');
  const [taskNameNEW, setTaskNameNEW] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDescriptionNEW, setTaskDescriptionNEW] = useState('');

  useEffect(() => {
    if (task) {
      setTaskName(task.taskName);
      setTaskDescription(task.taskDescription);
    }
  }, [task]);

  // Функция для обновления задачи на сервере
  const handleUpdateTask = async () => {
    try {
      console.log(`handleUpdateTask: taskName ${taskName}, taskDescription ${taskDescription}, unicId ${unicId}`);
      const updatedTaskName = taskNameNEW || taskName;
      const updatedTaskDescription = taskDescriptionNEW || taskDescription;
      await updateTaskAPI(updatedTaskName, updatedTaskDescription, unicId);
      // После успешного обновления задачи переходим на стартовую страницу
      navigate("/");
    } catch (error) {
      console.error('Ошибка при обновлении задачи:', error);
    }
  };

  return (
    <section className='task-details__container container'>
      <div className='task-details__task-name task-name'>
        <h2 className='task-name__subtitle subtitle'>Task details:  {task ? task.taskName : ''}</h2>
        <input
          className="task-name__input input"
          type="text"
          placeholder="Введите название задачи"
          value={taskNameNEW}
          onChange={(e) => setTaskNameNEW(e.target.value)}
        />
      </div>
      <div className='task-details__task-description task-description'>
        <p className='task-description__text'>Task description: {task ? task.taskDescription : ''}</p>
        <input
          className="task-description__input input"
          type="text"
          placeholder="Введите описание задачи"
          value={taskDescriptionNEW}
          onChange={(e) => setTaskDescriptionNEW(e.target.value)}
        />
      </div>
      <button 
        className='task-details__button button'
        onClick={handleUpdateTask}
      >Save changes</button>
    </section>
  );
};

export default TaskDetailsPage;
