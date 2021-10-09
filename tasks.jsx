import React from "react";
import Task from "./task";


const Tasks = ({tasks, handleTaskClick, handleTaskDeketion}) => {
    return(
        <>
            {tasks.map(task => <Task task={task} handleTaskDeketion={handleTaskDeketion} handleTaskClick={handleTaskClick}/>)}
        </>
    );
};
export default Tasks;