import React from "react";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import {requestDeleteTask} from "../actions"

const TaskList = () => {
    const tasks = useSelector(state => state.taskReducer.tasks);
    const dispatch = useDispatch();

    const handleTaskDelete = (unicId) => {
        console.log('Delete task click', unicId)
        dispatch(requestDeleteTask(unicId));
    };

    const renderList = tasks.map((task) => {
        return (
            <TaskItem 
                key={task.unicId}
                unicId={task.unicId}
                //deleteTask={deleteTask}
                task={task.taskName}
                onDelete={() => handleTaskDelete(task.unicId)} // Вызываем handleTaskDelete с unicId
            />
        )
    })

    return (
        <div className="">
            {renderList}
        </div>)
};

export default TaskList;