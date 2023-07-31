import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({tasks, deleteTask}) => {
    const renderList = tasks.map((task, index) => {
        return (
            <TaskItem 
                key={index.toString()}
                id={index}
                deleteTask={deleteTask}
                task={task}
            />
        )
    })

    return (
        <div className="">
            {renderList}
        </div>)
};

export default TaskList;