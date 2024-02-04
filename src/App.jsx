/* eslint-disable no-unused-vars */

// import './App.css'
import { Header2 } from "./components/Header2";
import { MenuH } from "./components/MenuH";
import { Feet } from "./components/Feet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { useColorMode, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, Box, Center } from "@chakra-ui/react";
import Tasklist from "./components/Tasklist";
import { Grid, GridItem } from "@chakra-ui/react";

const Home = React.lazy(() => import("./pages/Home"));
//const Tareas = React.lazy(() => import("./components/Tasklist"));
const SobreNosotros = React.lazy(() => import("./pages/SobreNosotros"));
const Tareas = React.lazy(() => import("./pages/Tareas"));

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column" mt="200px">
      <BrowserRouter>
        <Box>
          {/* Encabezado */}
          <Header2 />

        </Box>



        <Box flex="1" mt={4} p={4}>
          {/* Contenido principal */}

          <Box>
            {/* Menú Horizontal */}

            <MenuH />

          </Box>
          <Routes>
            <Route
              path="/tasklist/"
              element={
                <Suspense fallback="loading...">
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/tasklist/tareas"
              element={
                <Suspense fallback="loading...">
                  <Tareas />
                </Suspense>
              }
            />
            <Route
              path="/tasklist/about"
              element={
                <Suspense fallback="loading...">
                  <SobreNosotros />
                </Suspense>
              }
            />
          </Routes>

        </Box>

        <Box>
          {/* Pie de página */}
          <Feet />
        </Box>
      </BrowserRouter>
    </Flex>
  );
}

export default App;
