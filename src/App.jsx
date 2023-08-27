/* eslint-disable no-unused-vars */

import './App.css'
import Tasklist from './components/Tasklist'
import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
const Home = React.lazy(() => import("./pages/Home"));
const Lista = React.lazy(() => import("./components/Tasklist"));
const SobreNosotros = React.lazy(() => import("./pages/SobreNosotros"));




function App() {


  

  return(

    <div className=''>
    
    <BrowserRouter>
      <Menu />
      <div className='containerAll'>
      <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/tareas' element={<Lista/>}/>
        <Route path='/about' element={<SobreNosotros/>}/>
        </Routes>
      </Suspense>
      </div>
    </BrowserRouter>
  </div>
 

  )
 
}

export default App
