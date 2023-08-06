import React from "react";

const TaskItem = ({task, deleteTask, id}) => {

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
                    //onClick={() => {deleteTask(id)}}
                >
                    Удалить Задачу
                </button>
            </div>
        </div>
    );
};

export default TaskItem;