import { Link } from "react-router-dom";
import { Box, Menu, Flex } from "@chakra-ui/react";
import "../App.css";
import { Button } from "@chakra-ui/react";

function MenuL() {
  return (
    <Box
      p={6}
      ml={6}
      color="white"
      position="fixed"
      top="250px"
      left={0}
      bottom={0}
      width="200px"
      zIndex={1}
    >
      <Flex direction="column" gap="10px" justify="center" align="center">
        <Menu>
          <Button color="black" bg="#FED7E2" as={Button} w="200px">
            <Link to={"/"}>Inicio</Link>
          </Button>

          <Button color="black" bg="#FED7E2" as={Button} w="200px">
            <Link to="/tareas">Mis tareas diarias</Link>
          </Button>

          <Button color="black" bg="#FED7E2" as={Button} w="200px">
            <Link to="/about">Sobre Nosotros</Link>
          </Button>
        </Menu>
      </Flex>
    </Box>
  );
}

export { MenuL };
