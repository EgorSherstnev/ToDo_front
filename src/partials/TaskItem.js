import React from "react";
import { Link } from "react-router-dom";

const TaskItem = ({unicId, task, taskDescription, onDelete}) => {
    return (
        <div className="task__item item">
            <div className="item__name">
                <input 
                    className="item__checkbox"
                    type="checkbox"
                />
                    <span>{task}</span>
            </div>
            
            <div className="item__buttons">
                <div className="button button-task">
                    <Link to={`/task/${unicId}`}  className="link">
                        edit
                    </Link>
                </div>
                <button  
                className="button button-delete button-task"
                onClick={onDelete}
                >
                    delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;