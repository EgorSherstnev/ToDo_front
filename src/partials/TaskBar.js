import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadNewTask } from "../actions";

const TaskBar = ({onTaskSubmit}) => {
    const [taskName, setTaskName] = useState('');
    const currentSelectedListId = useSelector(state => state.listsReducer.selectedListId); // Получение текущего selectedListId из хранилища
    const dispatch = useDispatch()

    const onInputChange = (event) => {
        setTaskName(event.target.value);
    };


    const handleAddTask = async(event) => {
        event.preventDefault();
        try {
            console.log(taskName)
            await dispatch(uploadNewTask({
                listId: currentSelectedListId,
                taskName: taskName,
                taskDescription: 'null',
        }   ))
            setTaskName('');
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="">
            
            <form  className="">
                <div className="">
                    <label>Добавить задачу</label>
                    <input 
                        className="taskbar__input input"
                        type="text"
                        value={taskName}
                        onChange={onInputChange}
                    />
                    <button 
                        value="clickme"
                        onClick={handleAddTask }
                    >
                        Добавить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskBar;