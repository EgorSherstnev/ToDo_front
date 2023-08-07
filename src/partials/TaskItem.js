import React from "react";

const TaskItem = ({unicId, task, onDelete}) => {

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
                <button  
                    className="" 
                    
                >
                    Добавить описание
                </button>
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