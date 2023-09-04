/* eslint-disable react/prop-types */

import {useState} from "react";
import { Box} from '@chakra-ui/react'
import { Checkbox, Stack, Heading, Card, Flex , StackDivider, CardBody, Text } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from '@chakra-ui/react'


export default function Task ({id, taskN, taskD, isComplete, handleDeleteTask, handleUpdate, handleCheckUpdate}) {

  

  const [checkedStatus, setcheckedStatus]=useState(isComplete)
 
  const checkTasks=(isComplete)=>{
   const newState=!isComplete
   setcheckedStatus(newState)
   handleCheckUpdate(id)
    }
  return (
   <Box w='100%'>
<Card w="100%" h="auto">

  <CardBody w="100%"  >
    <Stack divider={<StackDivider />} spacing='4'>
      <Box w="100%">
        <Heading size='xs' textTransform='uppercase'>
      
         <Checkbox colorScheme='pink'  isChecked={checkedStatus}  type="checkbox" onChange={()=>checkTasks(checkedStatus)}>
         
       <Flex direction='row' >
  
        <Box w='850px' >
      <Heading as='h3' size='sm' w='100' className={`${checkedStatus? 'terminada':''}`}>{taskN} </Heading>
      </Box>
      <Box >
      <IconButton onClick={()=>handleUpdate(id)}  aria-label="Editar" icon={<EditIcon/>}  size="md" />
      <IconButton onClick={()=>handleDeleteTask(id)} aria-label="Editar" icon={<DeleteIcon/>}  size="md" /> 
      </Box>
      </Flex>
      
     
         </Checkbox>
       
        </Heading>
      

      </Box>

      <Box>
      <Text pt='2' fontSize='sm' align='left'>
        {taskD}
        </Text>
      </Box>
     
    </Stack>
  </CardBody>
</Card>


   </Box>
  
    )
}