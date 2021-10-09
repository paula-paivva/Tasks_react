import React, { useState } from "react";
import './App.css'
import AddTask from "./components/AddTask";
import Tasks from './components/tasks';
import Header from './components/header'

const App = () => {
  // let message = "Boa noite!!!!"
  const [tasks, setTasks] = useState([
    {
      id:"1",
      title: "Estrudar programação",
      completed: false,
    },
    {
      id:"2",
      title: "Ler livros ",
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return {...task, completed: !task.completed}
      return task;
    });
    setTasks(newTasks)
  }



  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [
      ...tasks,
      {
      title: taskTitle,
      id: Math.random(10),
      completed: false
    },
  ];
  setTasks(newTasks);
  };


  
  const handleTaskDeketion = (taskId) =>{
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }



  return( 
    <> 
    <div className="container">
      <Header/>
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeketion={handleTaskDeketion}/>
    </div>

    </>
  )
}
export default App;