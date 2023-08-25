import {useState, useEffect, useReducer} from 'react'
import {tasklistReducer} from '../tasklistReducer'

export  function useActions() {



     const taskArrayInitial=[];
     const init = () => {
      return JSON.parse(localStorage.getItem('taskList')) || []
  }
     const [tasklistArray, dispatch] = useReducer(tasklistReducer, taskArrayInitial, init);
     const[taskPendients, setTaskPendients] =useState(0)
     const[taskCompletes, settaskCompletes] =useState(0)
    
     useEffect(() => {
      localStorage.setItem('taskList', JSON.stringify(tasklistArray))
  }, [tasklistArray])  
  

  
  useEffect(()=>{
    const taskData=JSON.stringify(tasklistArray)
    window.localStorage.setItem('taskItems',taskData)
    setTaskPendients(tasklistArray.filter((task)=>(task.isComplete==false)).length)
    settaskCompletes(tasklistArray.filter((task)=>(task.isComplete==true)).length)
  
    }, [tasklistArray] )  
   


 function addTask(newTask){

  const action = {
    type: 'AddTask',
    payload: newTask,
  };
  dispatch(action)


}
function updateCompletedPendients()
{
  setTaskPendients(tasklistArray.filter((task)=>(task.isComplete==false)).length)
  settaskCompletes(tasklistArray.filter((task)=>(task.isComplete==true)).length)
}

function handleDeleteCompletedTask(){
  const action = {
    type: 'DeleteCompletedTasks',
     };
  dispatch(action);
  updateCompletedPendients()
}

function handleDeleteTask(id){
  const action = {
    type: 'DeleteTask',
    payload: id,
  };
  dispatch(action);
 updateCompletedPendients()
} 

function handleCheckUpdate(id){
  let index=tasklistArray.findIndex(task =>task.id == id);
  tasklistArray[index].isComplete=!tasklistArray[index].isComplete;
  updateCompletedPendients()
}

 return ([tasklistArray, addTask, handleDeleteTask, handleDeleteCompletedTask,handleCheckUpdate, taskPendients, taskCompletes])
 
}
