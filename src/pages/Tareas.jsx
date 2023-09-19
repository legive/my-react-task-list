

import { Box, Flex, Heading,  } from "@chakra-ui/react";

import Tasklist from "../components/Tasklist";



export default function Tareas() {


  return (
   <Box w='100%' p={5}>
    
    <Flex direction='column' alignItems='left' >
         
          {/*  <Heading as='h1'>Te ayudo a organizarte?</Heading> */}

        <Heading as='h1' fontSize='30px' mb={10}  >Ingresa tus tareas para hoy</Heading>
        </Flex>
        <Tasklist/>
        
    
      </Box>
  )
}
