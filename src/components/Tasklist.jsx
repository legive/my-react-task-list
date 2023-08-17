/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
//rafc para crear la estruxtura de una funcion

import {useState, useEffect, useReducer, useContext} from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Task from './Task'
import Header from './Header'
import { useActions } from "./hooks/useActions";
import { BsPencilFill, BsFillTrash3Fill, BsPlusSquareFill } from "react-icons/bs";

export default function Tasklist () {

  const [taskNew, settaskNew]=useState("");
  const [tasklistArray, addTask, deleteTask, updateTask]=useActions();
  const [checkedStatus, setcheckedStatus]=useState()



 function handleAddTask()
  {
   
addTask(taskNew);

settaskNew('')


  } 

  const handleDelete=(id)=>{
  deleteTask(id)
 
  }
  
  const handleUpdate=(id)=>{
      settaskNew(updateTask(id))
  console.log(taskNew)
  
  } 

  
 const checkTasks=(index, isComplete)=>{
   const newState=!isComplete
   tasklistArray[index].isComplete=newState
   setcheckedStatus(newState)
  
   }





  return (

    <div className="taskList">         
      <div>
      <Header />
    <form >
    <div className="container">
      <div className="checks">
      <input onChange={(event)=>{settaskNew(event.target.value)}}  className="agregar" type='text' 
     value={taskNew}

      placeholder={"Agregar Tarea"}  /></div>
      <div className="buttons" onClick={handleAddTask}><BsPlusCircleFill className="icon"/></div> 
      </div>  
    </form >


      {tasklistArray.map((task,index)=>
<div key={task.id} >

<div className="container" >
 
      <div  className="checks" onClick={()=>checkTasks(task.index,task.isComplete)}><p>{index+1}.</p><input  checked={checkedStatus}  type="checkbox" onChange={()=>checkTasks(task.index,task.isComplete)}/> 
      <p className={ `${checkedStatus? 'terminada':''}`}> {task.name}</p></div>

    
    <div className="buttons">
      <div onClick={()=>handleUpdate(task.id)}><BsPencilFill className="icon" /></div>
      <div onClick={()=>handleDelete(task.id)}><BsFillTrash3Fill className="icon"/></div>
     </div>


  </div>
 </div>
    )
}
<p>Tareas:{tasklistArray.length}</p>
<br></br>
<button className="botonGrande">Eliminar las tareas terminadas</button>
</div>

</div>
   
  )
}