
import { Box, Flex, Img} from "@chakra-ui/react";
//import header from '../img/header.jpg'; // Importa la imagen
import header from '../img/header.jpg'
import logo from '../img/logo.png'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton} from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react';
function Header2() {

  const {colorMode, toggleColorMode}=useColorMode();
  return (
    <Box>
     
    <Box
    bgImage={`url(${header})`}
    p={4}
    color="white"
    bgSize="cover"
    bgPosition="center"
    w="100%"
    h="200px"
    position="fixed"
    top={0}
    left={0}
    right={0}
    zIndex={1}
  >
 
    
     <Box width="100%" height="40px" bg="teal"  top={0}
    left={0}
    right={0}  zIndex={1} position="fixed"> 

<Flex justifyContent="right">

<IconButton
  isRound
  variant="solid"
  colorScheme="teal"
  icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
  size="sm"
  onClick={toggleColorMode}
  top="4px"
 mr={1}
>
  Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
</IconButton>
</Flex>
</Box>
    <Flex justify="center">

    <Img w="500px" src={logo} ></Img>
    </Flex>
    
  </Box>
  </Box>
  )
}

export {Header2};