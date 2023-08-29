/* eslint-disable no-unused-vars */

import './App.css'
import { ChakraProvider} from '@chakra-ui/react'
import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
const Home = React.lazy(() => import("./pages/Home"));
const Tareas = React.lazy(() => import("./pages/Tareas"));
const SobreNosotros = React.lazy(() => import("./pages/SobreNosotros"));




function App() {


  

  return(

    <div className=''>
    <ChakraProvider>
    <BrowserRouter>
      <Menu />
      <div className='containerAll'>
      <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/tareas' element={<Tareas/>}/>
        <Route path='/about' element={<SobreNosotros/>}/>
        </Routes>
      </Suspense>
      </div>
    </BrowserRouter>
    </ChakraProvider>
  </div>
 

  )
 
}

export default App
