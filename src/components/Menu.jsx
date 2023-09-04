import { Link } from "react-router-dom";
import {Box, Flex} from '@chakra-ui/react'
import "../App.css";
import { Button } from "@chakra-ui/react";
function Menu() {
  return (
    <Box p={4}
    bg="gray.200"
    color="white"
    position="fixed"
    top="150px"
    left={0}
    bottom={0}
    width="200px" 
    zIndex={1}
    
    
    >      <Flex direction='column' gap='10px' justify='center' align='center' >
      
      <Button colorScheme="teal" w='200px' ><Link to={"/"}>Inicio</Link></Button>
      <hr></hr>
      <Button colorScheme="teal" w='200px'><Link to='/tareas'>Mis tareas diarias</Link></Button>
      <hr></hr>
      <Button colorScheme="teal" w='200px'><Link to='/about'>Sobre Nosotros</Link></Button>
     
  </Flex>
  </Box>
  )
  
}

export { Menu };
