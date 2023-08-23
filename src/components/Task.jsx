/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//rafc para crear la estruxtura de una funcion
import {useState, useEffect} from "react";
import { useActions } from "./hooks/useActions";
import { BsPencilFill, BsFillTrash3Fill, BsPlusSquareFill } from "react-icons/bs";

export default function Task ({id, taskN, isComplete, taskList}) {
 
 
 const [checkedStatus, setcheckedStatus]=useState(isComplete)
 const [tasklistArray, DeleteTask]=useActions();
  const[taskArray, settaskArray]=useState(tasklistArray)
  
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
   
/* const handleCompletedPendients=()=>{

  const completeCountP=taskArray.filter(tarea=>tarea.isComplete==false).length
  const completeCountC=taskArray.filter(tarea=>tarea.isComplete==true).length
  pendingTask(completeCountP)
  completedTask(completeCountC)

} */
const handleDelete=(id)=>{

 DeleteTask(id)

}

  return (
   
 
    <div className="container" >
 
      <div  className="checks" onClick={()=>checkTasks(checkedStatus)}><p>{id}.</p><input checked={checkedStatus}  type="checkbox" onChange={()=>checkTasks(checkedStatus)}/> 
      <p className={ `${checkedStatus? 'terminada':''}`}>{taskN}</p></div>

    
    <div className="buttons">
      <div  ><BsPencilFill className="icon" /></div>
      <div onClick={handleDelete(id)}><BsFillTrash3Fill className="icon"/></div>
     </div>
  

  </div>

 
  
    )
}