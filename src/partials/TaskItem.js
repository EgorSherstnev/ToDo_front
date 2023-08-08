import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({unicId, task, taskDescription, onDelete}) => {
    return (
        <div className="task__item">
            <div className="">
                {task}
            </div>
            <div className="">
                <button  
                    className="" 
                    
                >
                    Редактировать Задачу
                </button>
            </div>
            <div className="">
                <Link to={`/task/${unicId}`} className="button">
                    Добавить описание
                </Link>
            </div>
            <div className="">
                <button  
                    className="" 
                    onClick={onDelete}
                >
                    Удалить Задачу
                </button>
            </div>
        </div>
    );
};

export default TaskItem;