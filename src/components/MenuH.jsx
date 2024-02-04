import { Link } from 'react-router-dom';
import { Menu} from '@chakra-ui/react';
import { Button, Box, Flex, Center } from "@chakra-ui/react";
import "../App.css";

function MenuH() {
  return (
    <Box  w={'90vw'}>
       <Center>
      <Flex gap={'5'}>
       
        <Menu>
          <Button as={Button} colorScheme='pink'>
              <Link to="/tasklist/">Inicio</Link>
          </Button>
          <Button as={Button} colorScheme='pink'>
              <Link to="/tasklist/tareas">Organiza tu día</Link>
              </Button>
           
              <Button as={Button} colorScheme='pink'>
              <Link to="/tasklist/about">Sobre mí</Link>
              </Button>
          
        </Menu>
     
      </Flex>
      </Center>
    </Box>
  );
}

export { MenuH };
