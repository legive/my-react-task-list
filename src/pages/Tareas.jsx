

import { Box, Flex, Heading, Center } from "@chakra-ui/react";

import Tasklist from "../components/Tasklist";



export default function Tareas() {


  return (
    
   <Box w='90vw' p={5}>
  
    <Flex direction='column' alignItems='left' >
         
          {/*  <Heading as='h1'>Te ayudo a organizarte?</Heading> */}
          <Center>
        <Heading justifyContent={'center'} as='h1' fontSize='30px' mb={10} color={'#d41d73'} >Ingresa tus tareas para hoy</Heading>
        </Center>
        </Flex>
        <Tasklist/>
        
    
      </Box>
     
  )
}
