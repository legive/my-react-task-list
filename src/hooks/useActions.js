import { useState, useEffect, useReducer } from 'react'
import { tasklistReducer } from '../tasklistReducer'
import { tasklist } from '../bd/tasklist'
export function useActions() {

  //localStorage.clear();

  const taskArrayInitial = tasklist;

  const init = () => {
    const arrayStorage = JSON.parse(localStorage.getItem('taskItems'))
    if (arrayStorage != "") { return arrayStorage || [] }
    else { return tasklist }

  }

  const [tasklistArray, dispatch] = useReducer(tasklistReducer, taskArrayInitial, init);

  const [taskPendients, setTaskPendients] = useState(0)
  const [taskCompletes, settaskCompletes] = useState(0)




  useEffect(() => {
    const taskData = JSON.stringify(tasklistArray)
    window.localStorage.setItem('taskItems', taskData)
    setTaskPendients(tasklistArray.filter((task) => (task.isComplete == false)).length)
    settaskCompletes(tasklistArray.filter((task) => (task.isComplete == true)).length)

  }, [tasklistArray, taskPendients, taskCompletes])



  function addTask(newTask) {

    const action = {
      type: 'AddTask',
      payload: newTask,
    };
    dispatch(action)


  }

  function UpdateTask(newTask) {
    console.log("payload update", newTask)
    const action = {
      type: 'UpdateTask',
      payload: newTask,
    };
    dispatch(action)


  }

  function updateCompletedPendients() {
    setTaskPendients(tasklistArray.filter((task) => (task.isComplete == false)).length)
    settaskCompletes(tasklistArray.filter((task) => (task.isComplete == true)).length)
  }

  function handleDeleteCompletedTask() {
    const action = {
      type: 'DeleteCompletedTasks',
    };
    dispatch(action);
    updateCompletedPendients()
  }

  function handleDeleteTask(id) {
    const action = {
      type: 'DeleteTask',
      payload: id,
    };
    dispatch(action);
    updateCompletedPendients()
  }

  function handleCheckUpdate(id) {
    console.log("llego")
    let index = tasklistArray.findIndex(task => task.id === id);
    console.log("indice",index)
    tasklistArray[index].isComplete = !tasklistArray[index].isComplete;
console.log(tasklistArray)
    updateCompletedPendients()

  }

  return ([tasklistArray, addTask, handleDeleteTask, handleDeleteCompletedTask, handleCheckUpdate, UpdateTask, taskPendients, taskCompletes])

}
