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
 
  const [taskName, settaskName]=useState("");
  const [taskId, settaskId]=useState(Date.now());
  const [taskCheck, settaskCheck]=useState(false);
  const [taskDescription, settaskDescription]=useState("");
  const [tasklistArray, addTask, deleteTask, updateTask]=useActions();
  const [checkedStatus, setcheckedStatus]=useState()
  const[error, setError]=useState("");
  

  useEffect(()=>{
  if (taskName=="")
  {
    setError("Ingrese una tarea")
  }
 else{
  if (taskName.length>3)
  {
  setError("")}
 else{setError("La tarea debe contenes mas de 3 caracteres")}
 }
}, [taskName] )

function limpiar(){
  settaskId(Date.now())
  settaskName('')
  settaskDescription('')
  settaskCheck(false)
}
 function handleAddTask()
  {
   const newTask={
      id:taskId,
      name:taskName,
      description:taskDescription,
      isComplete:taskCheck

   };
    addTask(newTask);
    limpiar();
  
  } 
  const handleUpdate=(id2)=>{
    const index=tasklistArray.findIndex((task)=>(task.id===id2));
    console.log(tasklistArray)
    settaskId(tasklistArray[index].id);
    settaskName(tasklistArray[index].name);
    settaskDescription(tasklistArray[index].description);
    settaskCheck(tasklistArray[index].isComplete);
    deleteTask(id2);
   

  } 
 const handleCheckUpdate=(id)=>{
 const index=tasklistArray.findIndex((task)=>(task.id===id))
 tasklistArray[index].isComplete=!tasklistArray[index].isComplete
 setcheckedStatus(tasklistArray[index].isComplete) 
   }
  return (
<form onSubmit={handleSubmit}>
    <div className="taskList">         
      <div>
      <Header />
    <form >
    <div className="container">
         <div className="tarea">
        <div className="agregarTarea"> <input onChange={(event)=>{settaskName(event.target.value)}}  className="agregar" type='text' 
             value={taskName} placeholder={"Tarea"}  />
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
      {tasklistArray.sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0)).map((task,index)=>
<div key={task.id} className="container2" >

<Task id={task.id} taskN={task.name} taskD={task.description} isComplete={task.isComplete} taskList={tasklistArray} deleteTask={deleteTask} handleUpdate={handleUpdate} handleCheckUpdate={handleCheckUpdate} />

 
</div>

    )
}
<p>Tareas:{tasklistArray.length} Terminadas:{tasklistArray.filter((task)=>(task.isComplete===true)).length} Pendientes:{tasklistArray.filter((task)=>(task.isComplete===!true)).length}</p>
<br></br>
<button className="botonGrande">Eliminar las tareas terminadas</button>
</div>

</div>
</form>
  )
}