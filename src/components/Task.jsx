/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//rafc para crear la estruxtura de una funcion
import {useState, useEffect} from "react";
import App from '../App.css'
import { BsPencilFill, BsFillTrash3Fill, BsPlusSquareFill } from "react-icons/bs";

export default function Task ({id, taskN, isComplete, taskList, pendingTask, completedTask}) {
 
 const[taskArray, settaskArray]=useState(taskList)
 const [checkedStatus, setcheckedStatus]=useState(isComplete)
 
  

  
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

  handleCompletedPendients()


   }
   
const handleCompletedPendients=()=>{

  const completeCountP=taskArray.filter(tarea=>tarea.isComplete==false).length
  const completeCountC=taskArray.filter(tarea=>tarea.isComplete==true).length
  pendingTask(completeCountP)
  completedTask(completeCountC)

}

  return (
    <div className="container" >
  
      <div  className="checks"><p>{id}.</p><input checked={checkedStatus}  type="checkbox" onChange={()=>checkTasks(checkedStatus)}/> 
      <p className={  `${checkedStatus? 'terminada':''}`}>{taskN}</p></div>

    
    <div className="buttons">
      <button  className="button"><BsPencilFill className="icon"/></button>
      <button  className="deleteButton"><BsFillTrash3Fill className="icon"/></button>
  </div>

  
  </div>
  
    )
}