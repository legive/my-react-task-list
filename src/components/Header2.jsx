
import { Box, Heading, Flex} from "@chakra-ui/react";
//import header from '../img/header.jpg'; // Importa la imagen
import header from '../img/header.jpg'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton} from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react';
function Header2() {

  const {colorMode, toggleColorMode}=useColorMode();
  return (
    <Box
    bgImage={header}
      p={4}
      color="white"
      bgSize="cover"
      bgPosition="center"
      w='100%'
      h='150px'
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      // Altura del encabezado
       >
        <Flex justify='center'>
         <Heading  m={5} size="2xl" color='teal'>Organiza tu día</Heading>
         </Flex>
         <IconButton icon={colorMode==='light'?<SunIcon/>:<MoonIcon/>}  size="md" onClick={toggleColorMode}>Toggle{colorMode==='light'?'Dark':'Light'} </IconButton>

    </Box>
  )
}

export {Header2};