import {useState, useEffect} from 'react'

export  function useActions() {
    const [tasklistArray, settasklistArray]=useState([])
   
    useEffect(()=>{

    const taskData=window.localStorage.getItem('taskItems')
    console.log({taskData})
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

    }, [tasklistArray] )  

 function addTask(taskNew)
 {const task2={name:taskNew, isComplete: false, id: crypto.randomUUID()}
 settasklistArray([...tasklistArray,task2]);
console.log(tasklistArray)
}


 function deleteTask(id2){

 const newTaskListArray=tasklistArray.filter((task)=>(task.id!==id2))

 settasklistArray(newTaskListArray);
console.log(tasklistArray)

}

function updateTask(id2){

    const newupdateTask=tasklistArray.filter((task)=>(task.id==id2))[0].name

    const newTaskListArray=tasklistArray.filter((task)=>(task.id!==id2))
    settasklistArray(newTaskListArray);
    console.log(newupdateTask)
    return newupdateTask
   
   
   }
 

  return ([tasklistArray, addTask, deleteTask, updateTask])

  
}
