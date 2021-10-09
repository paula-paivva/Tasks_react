import React from "react";
import './Task.css'

const Task = ({ task,handleTaskClick,handleTaskDeketion }) => {

    return (
        <div className="task-container"style={task.completed ? {borderLeft: '6px solid indigo'}:{}}>
        <div className="task-title" onClick={() => handleTaskClick(task.id)}>
            {task.title}
        </div>

        <div className="buttons-container">
            <button onClick={() => handleTaskDeketion(task.id)} className="see-details-task-button">Detalhes</button>
            <button onClick={() => handleTaskDeketion(task.id)} className="remove-task-button">X</button>

        </div>
        </div>
    )

    //return <div className="task-container">{task.title}</div>
};
export default Task;