import React, {useState} from "react";
import { useSelector } from "react-redux";

const TaskBar = ({onTaskSubmit}) => {
    const [task, setTask] = useState('');

    const onInputChange = (event) => {
        setTask(event.target.value);
    };

    const onAddTask = (event) => {
        event.preventDefault();
        onTaskSubmit(task);
       // console.log('добавил таску')
        setTask('');
        //console.log('очистил поле')
    };

    const currentSelectedListId = useSelector(state => state.listsReducer.selectedListId); // Получение текущего selectedListId из хранилища

    return (
        <div className="">
            
            <form  className="">
                <div className="">
                    <label>Добавить задачу</label>
                    <input 
                        className="taskbar__input input"
                        type="text"
                        value={task}
                        onChange={onInputChange}
                    />
                    <button 
                        value="clickme"
                        onClick={onAddTask }
                    >
                        Добавить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskBar;