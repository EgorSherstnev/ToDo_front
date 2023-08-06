import React from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

const TaskList = () => {
    const tasks = useSelector(state => state.taskReducer.tasks);

    const renderList = tasks.map((task) => {
        return (
            <TaskItem 
                key={task.unicId}
                id={task.id}
                //deleteTask={deleteTask}
                task={task.taskName}
            />
        )
    })

    return (
        <div className="">
            {renderList}
        </div>)
};

export default TaskList;