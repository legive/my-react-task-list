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
      top="200"
      left={0}
      bottom={0}
      width={{ base: "100%", md: "200px" }} // Ancho adaptativo
      zIndex={1}
      bg="" // Color de fondo del menú
    >
      <Flex direction="row" gap="20px" justify="center" align="center">
        <Menu>
          <Button color="black" bg="#FED7E2" as={Button} w="100%"> {/* Ancho adaptativo */}
            <Link to={"/"}>Inicio</Link>
          </Button>

          <Button color="black" bg="#FED7E2" as={Button} w="100%"> {/* Ancho adaptativo */}
            <Link to="/tareas">Mis tareas diarias</Link>
          </Button>

          <Button color="black" bg="#FED7E2" as={Button} w="100%"> {/* Ancho adaptativo */}
            <Link to="/about">Sobre mi</Link>
          </Button>
        </Menu>
      </Flex>
    </Box>
  );
}

export { MenuL };
