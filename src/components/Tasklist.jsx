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
   useEffect(()=>{

  
    console.log({tasklistArray})
    const taskPendients=tasklistArray.filter((task)=>(task.isComplete==false)).length
    console.log(taskPendients)
  },[]) 
  const [taskName, settaskName]=useState("")
 // const [taskPendients, settaskPendients]=useState("");
  const [taskId, settaskId]=useState(Date.now());
  const [taskCheck, settaskCheck]=useState(false);
  const [taskDescription, settaskDescription]=useState("");
  const [tasklistArray, addTask, deleteTask, deleteCompletedTask, handleCheckUpdate, taskPendients, taskCompletes]=useActions();
  const [checkedStatus, setcheckedStatus]=useState()
  const[error, setError]=useState("");
  let pendientes=0;

  useEffect(()=>{
  if (taskName=="")
  {
    setError("Ingrese una tarea")
  }
 else{
  if (taskName.length>3)
  {
  setError("")}
 else{setError("La tarea debe contener mas de 3 caracteres")}
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
   
    settaskId(tasklistArray[index].id);
    settaskName(tasklistArray[index].name);
    settaskDescription(tasklistArray[index].description);
    settaskCheck(tasklistArray[index].isComplete);
    deleteTask(id2);
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
<span>Tareas:{tasklistArray.length} Terminadas:{taskCompletes} Pendientes:{taskPendients}</span>
<br></br>

<button onClick={deleteCompletedTask} className="botonGrande">Eliminar las tareas terminadas</button>
</div>

</div>
</form>
  )
}