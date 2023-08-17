import React from 'react'

export const CurrentState = ({taskArray, completed, pendients}) => {
    
  const [tasklistArray,settasklistArray]=useState([ ])
  
  return (
    <p>Tareas:{taskArray.length}, Terminadas:{completed} , Pendientes: {pendients}</p> 
  )
}
export default CurrentState