/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
//rafc para crear la estruxtura de una funcion

import {useState, useEffect} from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Task from './Task'
import App from '../App.css'
import Header from './Header'


export default function Tasklist () {

  const [tasklistArray,settasklistArray]=useState([ ])
  const [pending, setPendings]=useState()
  const [completed, setCompleted]=useState() 


 useEffect(()=>{

    const taskData=window.localStorage.getItem('taskItems')
    
         if (taskData!=null)
         {
         settasklistArray(JSON.parse(taskData))
         setPendings(tasklistArray.filter(tarea=>tarea.isComplete==false).length)
         setCompleted(tasklistArray.filter(tarea=>tarea.isComplete==true).length)
         }
     else{

      settasklistArray([
        {name:'Aprender HTML', isComplete: false, id: 1},
        {name:'Aprender CSS', isComplete: false, id: 2},
        {name:'Aprender JAVASCRIPT', isComplete: false, id: 3},
        {name:'Aprender REACT', isComplete: false, id: 4},
        {name:'Aprender HOOKS', isComplete: false, id: 5},
        {name:'Aprender NODE & Npm', isComplete: false, id: 6}
      
      ])
      setPendings(tasklistArray.filter(tarea=>tarea.isComplete==false).length)
      setCompleted(tasklistArray.filter(tarea=>tarea.isComplete==true).length)
     }
  
  },) 

  

const pendingTask=(pending2)=>{
  setPendings(pending2)
}

const completedTask=(complete2)=>{
  setCompleted(complete2)
}


  return (

    <div className="taskList">
          
      <div>
      <Header />
     
      
    <form >
       
    <div className="container">

      <div className="checks"><input className="agregar" type='text' name='taskName' placeholder='Agrega una nueva tarea' /></div>
      <div className="buttons"><BsPlusCircleFill className="icon"/></div> 

      </div>  
    </form >
    

      {tasklistArray.map((task)=>

 
<div key={task} >

<Task id={task.id} taskN={task.name} isComplete={task.isComplete} taskList={tasklistArray} pendingTask={pendingTask} completedTask={completedTask}/>

 </div>

    )
}


<p>Tareas:{tasklistArray.length}, Terminadas:{completed} , Pendientes:{pending}</p>
<br></br>
<button className="botonGrande">Eliminar las tareas terminadas</button>
</div>
</div>
   
  )
}