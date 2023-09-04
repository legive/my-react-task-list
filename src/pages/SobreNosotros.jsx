

import { Box, OrderedList, Heading, ListItem, Text, Button, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
export default function SobreNosotros() {
  return (
    <Box w='100%'>
      
      
      <Heading as='h1'>Sobre Nosotros</Heading>
    <Text as='h3' size='md' textAlign='justify' lineHeight="2" >Organiza tu día fue desarrollada  utilizando la libreria de Javascript llamada React. 
    A continuación te voy a guiar a través de las increíbles características con las que cuenta esta herramienta indispensable en tu día a día. 
    </Text>
    <br></br>   
    <OrderedList textAlign='justify' fontSize="20px" fontWeight="light">
       <ListItem > 
       <Button mt='5' colorScheme='pink' variant='solid'>Agregar Tarea</Button>
        <Text>Te permite crear tareas nuevas de forma rápida y sencilla</Text></ListItem>



        <ListItem > <IconButton   aria-label="Editar" icon={<EditIcon/>}  size="md" />
           
          
          
          <Text> Te permite actualizar las existentes, ya sea su descripción o marcarlas como pendientes o ejecutadas.</Text></ListItem>
        <ListItem ><IconButton  aria-label="Editar" icon={<DeleteIcon/>}  size="md" />
          
     
           <Text>Te permite quitar las tareas que ya no ocupas o las que ya tienes culminadas.</Text></ListItem>
        </OrderedList>

<br></br>        
<Text size='md' textAlign='justify' lineHeight="2">En resumen, la aplicación de la lista de tareas es mucho más que una simple aplicación es una herramienta que te mantendrá organizado y eficiente en tus actividades diarias.
</Text>
   
    </Box>
  )
}
