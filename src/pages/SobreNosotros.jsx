

import { Box, Heading, Text, Center } from "@chakra-ui/react";

export default function SobreNosotros() {
  return (
    <Box w='90vw' p={5}>

      <Center>
        <Heading as='h1' fontSize='30px' color={'#d41d73'}>Bienvenido a Organiza tu día</Heading>
      </Center>
      <Text as='h3' fontSize='20px' textAlign='justify' lineHeight="2" mt={10} >
        <Heading as='h2' fontSize='25px' color={'#d41d73'}>Misión</Heading>
        Organiza tu día fue desarrollada  con la finalidad de simplificar tu vida y ayudarte a ser más productivo. </Text>
      <Text as='h3' fontSize='20px' textAlign='justify' lineHeight="2" > Hoy en día vivimos en mundo lleno de ocupaciones por lo que puede ser muy fácil olvidar algo que tenias que hacer, pensando en ti y en como hacer tu día más productivo hemos creado esta magnifica aplicación.</Text>
      <Heading as='h2' fontSize='25px' color='#d41d73'>Quien soy?</Heading>
      <Text as='h3' fontSize='20px' textAlign='justify' lineHeight="2" > Soy una desarrolladora junior con experiencia en el desarrollo y diseño de aplicaciones amigables para el usuario. Tengo el compromiso de día a día mejorar esta aplicación y asi personalizarla a tus necesidades. </Text>

      <Text fontSize='20px' textAlign='justify' lineHeight="2">En resumen, la aplicación de la lista de tareas es mucho más que una simple aplicación es una herramienta que te mantendrá organizado y eficiente en tus actividades diarias.
      </Text>
      <Box mt={10} cursor={'pointer'}>
      <a href="http://legive-dev.com">
        <Text  color={'#d41d73'}>Visita mi página para saber más legive-dev.com</Text>
      </a>
      </Box>
     

    </Box>
  )
}
