

import { Box, Flex, Heading,  } from "@chakra-ui/react";

import Tasklist from "../components/Tasklist";



export default function Tareas() {


  return (
   <Box w='100%' mt={150}>
    
    <Flex direction='column' alignItems='center' >
         
   

       {/*  <Heading as='h1'>Te ayudo a organizarte?</Heading> */}

        <Heading as='h3' fontSize='20px'>Ingresa tus tareas para hoy</Heading>
        <Tasklist/>
        </Flex>
    
      </Box>
  )
}
