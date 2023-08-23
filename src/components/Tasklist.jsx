/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
//rafc para crear la estruxtura de una funcion

import {useState, useEffect} from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Header from './Header'
import { useActions } from "./hooks/useActions";
import { BsPencilFill, BsFillTrash3Fill, BsPlusSquareFill } from "react-icons/bs";
import App from '../App.css'
import Task from "./Task"

export default function Tasklist () {
  function handleSubmit(event) {
    event.preventDefault();
    
   }
 
  const [taskNew, settaskNew]=useState("");
  const [taskDescription, settaskDescription]=useState("");
  const [tasklistArray, addTask, deleteTask, updateTask]=useActions();
  const [checkedStatus, setcheckedStatus]=useState()
  const[error, setError]=useState("");
  

  

 function handleAddTask()
  {
    if (taskNew!="")
    {addTask(taskNew, taskDescription);
    setError("")}
   else{setError("Ingrese una tarea")}


settaskNew('')
settaskDescription('')


  } 

  const handleDelete=(id)=>{
  deleteTask(id)
 
  }
  
  const handleUpdate=(id)=>{
      settaskNew(updateTask(id))
  console.log(taskNew)
  
  } 

  
 const checkTasks=(index, isComplete2)=>{
  console.log(index)
   const newState=!isComplete2
   tasklistArray[index].isComplete=newState

   setcheckedStatus(newState)
   
  
   }





  return (
<form onSubmit={handleSubmit}>
    <div className="taskList">         
      <div>
      <Header />
    <form >
    <div className="container">
      <div className="checks">
      
      <input onChange={(event)=>{settaskNew(event.target.value)}}  className="agregar" type='text' 
     value={taskNew} placeholder={"Tarea"}  />
     <input onChange={(event)=>{settaskDescription(event.target.value)}}  className="agregar" type='text' 
     value={taskDescription} placeholder={"Descripción"}  />
     </div>
      
      <div className="buttons" onClick={handleAddTask}><BsPlusCircleFill className="icon"/></div> 
      
      </div> 
      <p style={{color:'red'}}>{error}</p> 
    </form >


      {tasklistArray.map((task,index)=>
<div key={task.id} >

<div key={task} className="">

<Task id={task.id} taskN={task.name} taskD={task.taskDescription} isComplete={task.isComplete} taskList={tasklistArray} />

 
</div>
 </div>
    )
}
<p>Tareas:{tasklistArray.length} Terminadas: Pendientes:</p>
<br></br>
<button className="botonGrande">Eliminar las tareas terminadas</button>
</div>

</div>
</form>
  )
}