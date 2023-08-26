
//rafc para crear la estruxtura de una funcion

import {useState, useEffect} from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import Header from './Header'
import { useActions } from "../hooks/useActions";
import Task from "./Task"

export default function Tasklist () {
  function handleSubmit(event) {
    event.preventDefault();
    
   }

   const [tasklistArray, addTask, handleDeleteTask, handleDeleteCompletedTask, handleCheckUpdate, taskPendients, taskCompletes]=useActions(); 
   const [taskName, settaskName]=useState("")
  const [taskId, settaskId]=useState(Date.now());
  const [taskCheck, settaskCheck]=useState(false);
  const [taskDescription, settaskDescription]=useState("");
  const[error, setError]=useState("");
  const[error2, setError2]=useState("");
  const[error3, setError3]=useState("");

  useEffect(()=>{

    setError2(taskDescription.length)
    setError3(taskName.length)
     if(taskDescription.length>=200){

      alert("Sólo se permiten de 200 caracteres")
     }
   if(taskName.length>=50){

      alert("Sólo se permiten de 50 caracteres")
     }
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

 
}, [taskName, taskDescription] )

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
  
   if (taskName=="")
  {
    setError("Ingrese una tarea")
    alert("Ingrese una tarea")
  }
  else if (taskName.length<=3){
    setError("La tarea debe contener mas de 3 caracteres")
    alert("La tarea debe contener mas de 3 caracteres")
  }
  else if(taskDescription.length>=200){

      alert("Sólo se permiten de 200 caracteres")
     }
     else if(taskName.length>=50){

      alert("Sólo se permiten de 50 caracteres")
     }
     else{
    addTask(newTask);
    limpiar();
  }

}
  
  const handleUpdate=(id)=>{
    const index=tasklistArray.findIndex((task)=>(task.id===id));
    settaskId(tasklistArray[index].id);
    settaskName(tasklistArray[index].name);
    settaskDescription(tasklistArray[index].description);
    settaskCheck(tasklistArray[index].isComplete);
    handleDeleteTask(id);
    } 
  
   return (
<form onSubmit={handleSubmit} className="container">
         
     <Header />
    <form className="addTask">
    
      <div className="tarea">
        <div className="agregarTarea"> <input onChange={(event)=>{settaskName(event.target.value)}}  className="agregar" type='text' 
             value={taskName} placeholder={"Tarea"} />
        </div>
        <div className="botonAgregar" onClick={handleAddTask}><BsPlusCircleFill className="icon2"/>
        </div> 
      </div>


      <div className="error"><span style={{color:'red'}}>{error}                      {error3}</span></div>    
      <div className="inputDescripcion">
     <textarea onChange={(event)=>{settaskDescription(event.target.value)}}  className="agregar" type='textarea' 
     value={taskDescription} placeholder={"Descripción"}  />

     </div>
     <div className="error"><span style={{color:'red'}}>{error2}</span></div>
    
    </form >

     {/*tasklistArray.sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0))*/}
      {tasklistArray.sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0)).map((task)=>
<div key={task.id} className="containerTareasmap" >

<Task id={task.id} taskN={task.name} taskD={task.description} isComplete={task.isComplete} taskList={tasklistArray} handleDeleteTask={handleDeleteTask} handleUpdate={handleUpdate} handleCheckUpdate={handleCheckUpdate} />

 
</div>

    )
}
<br></br>
<h3>Tareas:{tasklistArray.length} Terminadas:{taskCompletes} Pendientes:{taskPendients}</h3>
<br></br>

<button onClick={handleDeleteCompletedTask} className="botonGrande">Eliminar las tareas terminadas</button>



</form>
  )
}