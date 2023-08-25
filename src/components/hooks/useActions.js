import {useState, useEffect} from 'react'

export  function useActions() {


   
    const [tasklistArray, settasklistArray]=useState([])
    
     const[taskPendients, setTaskPendients] =useState(tasklistArray.filter((task)=>(task.isComplete==false)).length)
     const[taskCompletes, settaskCompletes] =useState(tasklistArray.filter((task)=>(task.isComplete==true)).length)
     
    useEffect(()=>{

    const taskData=window.localStorage.getItem('taskItems')
    
         if (taskData!==null || taskData!=="")
         {
         settasklistArray(JSON.parse(taskData))
              
            }
            else{
                settasklistArray([])
            }
     
  },[])  
  

  
  useEffect(()=>{
    const taskData=JSON.stringify(tasklistArray)
    window.localStorage.setItem('taskItems',taskData)
    setTaskPendients(tasklistArray.filter((task)=>(task.isComplete==false)).length)
    settaskCompletes(tasklistArray.filter((task)=>(task.isComplete==true)).length)
  
    }, [tasklistArray] )  
   


 function addTask(newTask){
 settasklistArray([...tasklistArray,newTask]);

}
function updateCompletedPendients()
{
  setTaskPendients(tasklistArray.filter((task)=>(task.isComplete==false)).length)
settaskCompletes(tasklistArray.filter((task)=>(task.isComplete==true)).length)
}
function deleteCompletedTask(){

const newTaskListArray=tasklistArray.filter((task)=>(task.isComplete===false))
settasklistArray(newTaskListArray)
updateCompletedPendients()


}

 function deleteTask(id2){
 const newTaskListArray=tasklistArray.filter((task)=>(task.id!==id2))
 settasklistArray(newTaskListArray);
 updateCompletedPendients()
}

function handleCheckUpdate(id){

  let index=tasklistArray.findIndex(task =>task.id == id);
  tasklistArray[index].isComplete=!tasklistArray[index].isComplete;
  updateCompletedPendients()
}

 return ([tasklistArray, addTask, deleteTask, deleteCompletedTask,handleCheckUpdate, taskPendients, taskCompletes])
 
}
