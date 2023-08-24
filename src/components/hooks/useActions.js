import {useState, useEffect} from 'react'

export  function useActions() {
    const [tasklistArray, settasklistArray]=useState([])
   
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

    }, [tasklistArray] )  



 function addTask(taskNew, taskDescription)
 {const newTask={name:taskNew, isComplete: false, id: Date.now(), description:taskDescription}
 
 
 settasklistArray([...tasklistArray,newTask]);
 //const sortestaskList= [...tasklistArray].sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0))

 
/* //settasklistArray(sortestaskList);
console.log(sortestaskList)
console.log(tasklistArray)
settasklistArray(sortestaskList);
console.log(newTaskListArray) */
}


 function deleteTask(id2){
  console.log("Este es el id"+id2)
 const newTaskListArray=tasklistArray.filter((task)=>(task.id!==id2))
 
 settasklistArray(newTaskListArray);
 console.log(newTaskListArray)
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
