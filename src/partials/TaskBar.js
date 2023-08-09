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
        if (!taskName.trim()) {
            alert("Введите название задачи");
            return;
        }
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
        <section className="taskbar__container taskbar">
            
            <form  className="taskbar__form form">
                <label
                    className="form__subtitle subtitle"
                >
                    Add a task
                </label>
                <input 
                    className="form__input input"
                    type="text"
                    value={taskName}
                    onChange={onInputChange}
                />
                <button 
                    className="form__button button"
                    value="clickme"
                    onClick={handleAddTask }
                >
                    Add
                </button>
            </form>
        </section>
    );
};

export default TaskBar;