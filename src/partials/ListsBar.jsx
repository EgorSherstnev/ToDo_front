import React, { useState, useEffect } from "react";
//import { getAllLists } from "../http/taskAPI";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetLists, uploadNewList, updateList as updateListAction, resetUpdateList } from "../actions";
import { updateListAPI } from "../http/taskAPI";
const ListBar = () => {
    const [taskList, setTaskList] = useState('');
    const dispatch = useDispatch()
    const updateList = useSelector(state => state.listsReducer.updateList);

    useEffect(() => {
        if (updateList) {
            setTaskList(updateList.taskList);
        } else {
            setTaskList('');
        }
    }, [updateList]);

    const handleAddOrUpdateList = async (event) => {
        event.preventDefault();
        if (!taskList.trim()) {
            alert("Введите название списка задач");
            return;
        }
        try {
            if (updateList) {
                // Update existing list
                console.log(updateList)
                console.log(taskList)
                const updatedList = { ...updateList, taskList };
                console.log(updatedList)
                await updateListAPI(updatedList.id, taskList); // Отправляем запрос на обновление
                dispatch(resetUpdateList(null)); // Обнуляем updateList
            } else {
                // Add new list
                await dispatch(uploadNewList(taskList));
            }
            setTaskList('');
            dispatch(fetchGetLists()); // Загружаем обновленный список
        } catch (e) {
            alert(e.response.data.message);
        }
    };
    
    const handleUpdateLists = async(e) => {
        e.preventDefault();
        try {
            dispatch(fetchGetLists())
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <section className="listbar__container listbar">
            <h1 className="listbar__title">ToDo List</h1>
            <button 
                className="listbar__button button"
                onClick={handleUpdateLists}
            >
                Get data from the server
            </button>
            <form  className="listbar__form form">
                <label className="form__subtitle subtitle">
                    {updateList ? "Save changes" : "Add a task list"}
                </label>
                <input 
                    className="form__input input"
                    type="text"
                    value={taskList}
                    onChange={(e) => setTaskList(e.target.value)}
                />
                <button 
                    className="form__button button"
                    onClick={handleAddOrUpdateList}
                >
                    {updateList ? "Save" : "Add"}
                </button>
                    
            </form>
        </section>
    );
};

export default ListBar;