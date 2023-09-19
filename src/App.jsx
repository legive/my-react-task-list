/* eslint-disable no-unused-vars */

// import './App.css'
import {Header2} from "./components/Header2";
import { MenuL } from "./components/MenuL";
import { Feet } from "./components/Feet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { useColorMode, Flex } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, Box, Center } from '@chakra-ui/react'
import Tasklist from './components/Tasklist';
import { Grid, GridItem } from '@chakra-ui/react'

const Home = React.lazy(() => import("./pages/Home"));
//const Tareas = React.lazy(() => import("./components/Tasklist"));
const SobreNosotros = React.lazy(() => import("./pages/SobreNosotros"));
const Tareas = React.lazy(() => import("./pages/Tareas"));

function App() {

const {colorMode, toggleColorMode}=useColorMode();
  

  return(
   
      
    
    
   
    
  
    <Box w='1200px'>
   
    <Flex direction='column'  alignItems='center'>
      
   
 
    
    
    <BrowserRouter>
    <Grid templateColumns="repeat(6, 1fr)" gap={0}>
   
          <GridItem colSpan={6}  >
          <Header2/>
         
          </GridItem>

        
          <GridItem colSpan={1}  >
          <Box width="200px"  borderWidth={1}>
          <MenuL/>
          </Box>
          </GridItem>
          <GridItem colSpan={5}>
            
          <Box width="100%" mt={200} borderWidth={1}>
          <Routes>
      
          <Route path="/" element={<Suspense fallback="loading..."><Home/></Suspense>} />
    <Route path="/tareas" element={<Suspense fallback="loading..."><Tareas/></Suspense>} />
    <Route path="/about" element={<Suspense fallback="loading..."><SobreNosotros/></Suspense>}/>
    
    </Routes>

    
</Box>
          </GridItem>
          <GridItem colSpan={6} >
          <Feet/>
          </GridItem>
        </Grid>
       
       
        </BrowserRouter>
      
      </Flex>
     
      </Box> )
   
   
   
    
  
 

  
 
}

export default App
