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
  

  useEffect(()=>{
    

    
  if (taskNew!="")
  {
  setError("")}
 else{setError("Ingrese una tarea")}

 if (taskNew.length>3)
  {
  setError("")}
 else{setError("La tarea debe contenes mas de 3 caracteres")}
}, [taskNew] )

 function handleAddTask()
  {
   

    addTask(taskNew, taskDescription)
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
      
      <div className="tarea">
        <div className="agregarTarea"> <input onChange={(event)=>{settaskNew(event.target.value)}}  className="agregar" type='text' 
             value={taskNew} placeholder={"Tarea"}  />
        </div>
        
        <div className="botonAgregar" onClick={handleAddTask}><BsPlusCircleFill className="icon2"/>
        </div> 
      
      
      </div>

      <div className="error"><span style={{color:'red'}}>{error}</span></div>
     
     
      <div className="inputDescripcion">
     <textarea onChange={(event)=>{settaskDescription(event.target.value)}}  className="agregar" type='textarea' 
     value={taskDescription} placeholder={"Descripción"}  />
     
     </div>
      
      
      
      </div> 
    
    </form >

     {/*tasklistArray.sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0))*/}
      {tasklistArray.map((task,index)=>
<div key={task.id} className="container2" >

{console.log("volvio a cargar")}

<Task id={task.id} taskN={task.name} taskD={task.description} isComplete={task.isComplete} taskList={tasklistArray} handleDelete={handleDelete} handleUpdate={handleUpdate} />

 
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