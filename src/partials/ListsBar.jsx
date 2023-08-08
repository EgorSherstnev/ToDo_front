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
        <div className="">
            
            <form  className="">
                <div className="">
                    <label>{updateList ? "Сохранить изменения" : "Добавить список задач"}</label>
                    <input 
                        className="listbar__input input"
                        type="text"
                        value={taskList}
                        onChange={(e) => setTaskList(e.target.value)}
                    />
                    <button onClick={handleAddOrUpdateList}>
                        {updateList ? "Сохранить" : "Добавить"}
                    </button>
                    <button 
                        className="button"
                        onClick={handleUpdateLists}
                    >
                        Обновить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ListBar;