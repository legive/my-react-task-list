/* eslint-disable no-unused-vars */

import './App.css'
import Header from './components/Header'
import TaskList from './components/Tasklist'



function App() {
  return(

    <div>
      <Header />
    <br></br>
     <div >
      <h3>Agregar nueva tareas</h3>
      
     <TaskList/>
      
    </div> 

 
 
    </div>
  )
 
}

export default App
