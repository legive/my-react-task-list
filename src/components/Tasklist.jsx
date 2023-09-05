
//rafc para crear la estruxtura de una funcion

import {useState, useEffect} from "react";
import { useActions } from "../hooks/useActions";
import Task from "./Task"
import {Box, Flex, Button, FormControl,   Input, Textarea, Card,  StackDivider, CardBody, Text, Stack, Heading, Center} from '@chakra-ui/react'

export default function Tasklist () {
  function handleSubmit(event) {
    event.preventDefault();
    
   }

   const [tasklistArray, addTask, handleDeleteTask, handleDeleteCompletedTask, handleCheckUpdate, taskPendients, taskCompletes]=useActions(); 
   const [taskName, settaskName]=useState("")
  const [taskId, settaskId]=useState(Date.now());
  const [taskCheck, settaskCheck]=useState(false);
  const [taskDescription, settaskDescription]=useState("");
  const[error, setError]=useState("");
  const[error2, setError2]=useState("");
  const[error3, setError3]=useState("");

  useEffect(()=>{
    
    setError2(taskDescription.length)
    setError3(taskName.length)
     if(taskDescription.length>=200){

      setError2("Sólo se permiten de 200 caracteres")
     }
   if(taskName.length>=50){

      setError3("Sólo se permiten de 50 caracteres")
     }
  if (taskName=="")
  {
    setError("Ingrese una tarea")
  }
 else{
  if (taskName.length>3)
  {
  setError("")}
 else{setError("La tarea debe contener mas de 3 caracteres")}
 }
 
  

 
}, [taskName, taskDescription, taskCheck, tasklistArray] )

function limpiar(){
  settaskId(Date.now())
  settaskName('')
  settaskDescription('')
  settaskCheck(false)
}

 function handleAddTask()
  {
   const newTask={
      id:taskId,
      name:taskName,
      description:taskDescription,
      isComplete:taskCheck
   };
  
   if (taskName=="")
  {
    setError("Ingrese una tarea")
    //alert("Ingrese una tarea")
  }
  else if (taskName.length<=3){
    setError("La tarea debe contener mas de 3 caracteres")
    //alert("La tarea debe contener mas de 3 caracteres")
  }
  else if(taskDescription.length>=200){

    setError2("Sólo se permiten de 200 caracteres")
     }
     else if(taskName.length>=50){

      setError("Sólo se permiten de 50 caracteres")
     }
     else{
    addTask(newTask);
    limpiar();
  }

}
  
  const handleUpdate=(id)=>{
    const index=tasklistArray.findIndex((task)=>(task.id===id));
    settaskId(tasklistArray[index].id);
    settaskName(tasklistArray[index].name);
    settaskDescription(tasklistArray[index].description);
    settaskCheck(tasklistArray[index].isComplete);
    handleDeleteTask(id);
    } 
  
   return (

    <Box w='100%' >


      <Flex direction='column' justify='center' align='center'>  
      <FormControl onSubmit={handleSubmit}>
      <Center>
     <Card w="100%" h="auto" borderWidth={1}>
     <CardBody   >
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
        <Stack spacing={5} direction='row' w='100%'>
        
         <Input onChange={(event)=>{settaskName(event.target.value)}}  type='text' 
             value={taskName} placeholder={"Tarea"}/> 
            
         </Stack>
        </Heading>
        <Box align='left' color=' rgb(228, 150, 193);'>
          <Flex gap='85%'>
        <Text fontSize='15'>{error}</Text>
        <Text fontSize='15'>{error3}</Text>
        </Flex>
        </Box>
      </Box>

      <Box>
      <Text pt='2' fontSize='sm' align='left'>
      <Textarea  onChange={(event)=>{settaskDescription(event.target.value)}}   type='text' 
             value={taskDescription} placeholder={"Descripción"}/>
        </Text>
        <Box align='right' color=' rgb(228, 150, 193);' >
               <Text fontSize='15'>{error2}</Text>
        </Box>
     
        <Button mt='5' onClick={handleAddTask} colorScheme='teal' variant='solid'>
 Agregar Tarea
  </Button>
      </Box>
     
    </Stack>
  </CardBody>
  </Card>
  </Center>
  
</FormControl>
 
      
    
  
{tasklistArray.sort((a, b) => (a.id < b.id ? 1 : a.id > b.id ? -1 : 0)).map((task)=>
<Box key={task.id} className="" w='100%'>

<Task id={task.id} taskN={task.name} taskD={task.description} isComplete={task.isComplete} taskList={tasklistArray} handleDeleteTask={handleDeleteTask} handleUpdate={handleUpdate} handleCheckUpdate={handleCheckUpdate} />

 
</Box>

    )
}
<br></br>
<Heading as="h6"  size='md'>Tareas:{tasklistArray.length} Terminadas:{taskCompletes} Pendientes:{taskPendients}</Heading>
<br></br>




  <Button onClick={handleDeleteCompletedTask} colorScheme='teal' variant='solid'>
  Eliminar las tareas terminadas
  </Button>




  </Flex> 

</Box>
  )
}