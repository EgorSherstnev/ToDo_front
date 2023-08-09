import React, {useState} from "react";
import { 
    Routes,
    Route,
} from "react-router-dom";
import "./css/style.css"
import ListBar from "./partials/ListsBar";
import Lists from "./partials/Lists";
import TaskBar from "./partials/TaskBar";
import TaskList from "./partials/TasksList";
import TaskDetailsPage from "./pages/TaskDetailsPage";

const App = () => {
    const [tasks, setTasks] = useState([]);

    const onTaskSubmit = (task) => {
        setTasks([...tasks,task ]);
        //console.log(tasks);
    };

    const deleteTask = (taskIndex) => {
        //console.log('Удалил задачу №' + taskIndex);
        const delTasks = tasks.filter((_, index) => index !== taskIndex);
        setTasks(delTasks);
    };

    return(
        <Routes>
            <Route exact path="/" element={
                <div className="wrapper ">
                    <div className="container">
                        <ListBar />
                        <Lists />
                        <div>
                            <TaskBar onTaskSubmit={onTaskSubmit} />
                        </div>
                        <div>
                            <TaskList 
                                tasks={tasks}
                                deleteTask={deleteTask}
                            />
                        </div>
                    </div>
                </div>} 
            />
            <Route path="/task/:unicId" element={<TaskDetailsPage />} />
        </Routes>
        
    );
};

export default App;