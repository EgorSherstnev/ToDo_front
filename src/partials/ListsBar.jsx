import React, { useState } from "react";
//import { getAllLists } from "../http/taskAPI";
import { useDispatch } from "react-redux";
import { fetchGetLists, uploadNewList } from "../actions";

const ListBar = () => {
    const [taskList, setTaskList] = useState('');
    const dispatch = useDispatch()

    const handleAddList = async (event) => {
        event.preventDefault();
        try {
            console.log(taskList)
            await dispatch(uploadNewList(taskList));
            setTaskList('');
        } catch (e) {
            alert(e.response.data.message)
        }
    };
    
    const handleUpdateLists = async(e) => {
        e.preventDefault();
        try {
            //let data = await getAllLists()
            dispatch(fetchGetLists())
            //console.log(data);
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="">
            
            <form  className="">
                <div className="">
                    <label>Добавить список задач</label>
                    <input 
                        className="listbar__input input"
                        type="text"
                        value={taskList}
                        onChange={(e) => setTaskList(e.target.value)}
                    />
                    <button onClick={handleAddList}>Добавить</button>
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