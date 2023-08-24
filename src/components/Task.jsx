/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//rafc para crear la estruxtura de una funcion
import {useState, useEffect} from "react";
import App from '../App.css'
import { BsPencilFill, BsFillTrash3Fill, BsPlusSquareFill } from "react-icons/bs";
import { useActions } from "./hooks/useActions";

export default function Task ({id, taskN, taskD, isComplete, taskList, handleDelete, handleUpdate}) {
  
  const [taskNew, settaskNew]=useState("");
 
 const [checkedStatus, setcheckedStatus]=useState(isComplete)
 
 const[taskArray, settaskArray]=useState(taskList)
  
 useEffect(()=>{
    const taskData=JSON.stringify(taskArray)
    window.localStorage.setItem('taskItems',taskData)

    }, [ checkedStatus ]) 

  
 const checkTasks=(isComplete)=>{
   
   const newState=!isComplete
   setcheckedStatus(newState)
   taskArray[id-1].isComplete=newState
   let index=taskArray.findIndex(task =>task.id == id);
   taskArray[index].complete=newState;
  //handleCompletedPendients()

   }
 /*   const handleDelete=(id)=>{
    deleteTask(id)
   
    } */
    
 /*    const handleUpdate=(id)=>{
        settaskNew(updateTask(id))
    
    
    } */ 
   
/* const handleCompletedPendients=()=>{

  const completeCountP=taskArray.filter(tarea=>tarea.isComplete==false).length
  const completeCountC=taskArray.filter(tarea=>tarea.isComplete==true).length
  pendingTask(completeCountP)
  completedTask(completeCountC)

} */

  return (
    <div className="containerTareas" >
  
      <div key={id}  className="containerAllTask" >
      
      <div className="tareaCheck">
        
      <div className="checkbox"><input checked={checkedStatus}  type="checkbox" onChange={()=>checkTasks(checkedStatus)}/></div>
      <div className="tareaAgregada"><p className={  `${checkedStatus? 'terminada':''}`}>{taskN} </p></div>
      
      
       </div> 
      
      <div>
        <p></p>
        <h4>Descripción: {taskD}</h4></div>
      </div>

      <div className="buttons">
      <div onClick={()=>handleUpdate(id)} ><BsPencilFill className="icon"/></div>
      <div onClick={()=>handleDelete(id)}><BsFillTrash3Fill className="icon"/></div>
              
      </div>

    
    

  
  </div>
  
    )
}