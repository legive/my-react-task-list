/* eslint-disable react/prop-types */

import {useState} from "react";
import { BsPencilFill, BsFillTrash3Fill } from "react-icons/bs";


export default function Task ({id, taskN, taskD, isComplete, handleDeleteTask, handleUpdate, handleCheckUpdate}) {

  

  const [checkedStatus, setcheckedStatus]=useState(isComplete)
 
  const checkTasks=(isComplete)=>{
   const newState=!isComplete
   setcheckedStatus(newState)
   handleCheckUpdate(id)
    }
  return (
    <div className="containerTareas" >
      <div key={id}  className="containerAllTask" >
      <div className="tareaCheck">
      <div className="checkbox"><input className="check" checked={checkedStatus}  type="checkbox" onChange={()=>checkTasks(checkedStatus)}/></div>
      <div className="tareaAgregada"><h3 className={  `${checkedStatus? 'terminada':''}`}>{taskN} </h3></div>
       </div>
      <div>
        
        <p>{taskD}</p></div>
      </div>
      <div className="buttons">
      <div onClick={()=>handleUpdate(id)} ><BsPencilFill className="icon"/></div>
      <div onClick={()=>handleDeleteTask(id)}><BsFillTrash3Fill className="icon"/></div>   
      </div>
  </div>
  
    )
}