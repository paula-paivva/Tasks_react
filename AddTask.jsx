import React, { useState } from "react";
import "./addTask.css"
import Button from "./button";

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    };
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("");
    }
    return (
        <div className="add-task-container">
        <input onChange={handleInputChange} 
        value={inputData}
        className="add-task-input" 
        type="text" />
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
    );
}
export default AddTask;