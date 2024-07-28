/* eslint-disable no-unused-vars */

import { Header2 } from "./components/Header2";
import { MenuH } from "./components/MenuH";
import { Feet } from "./components/Feet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { useColorMode, Flex, Box, Spinner } from "@chakra-ui/react";

const Home = React.lazy(() => import("./pages/Home"));
const SobreNosotros = React.lazy(() => import("./pages/SobreNosotros"));
const Tareas = React.lazy(() => import("./pages/Tareas"));

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column" mt="200px">
      <BrowserRouter>
        <Box>
          <Header2 />
        </Box>
        <Box flex="1" mt={4} p={4}>
          <MenuH />
          <Routes>
            <Route
              path="/tasklist/"
              element={
                <Suspense fallback={<Spinner />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/tasklist/tareas"
              element={
                <Suspense fallback={<Spinner />}>
                  <Tareas />
                </Suspense>
              }
            />
            <Route
              path="/tasklist/about"
              element={
                <Suspense fallback={<Spinner />}>
                  <SobreNosotros />
                </Suspense>
              }
            />
          </Routes>
        </Box>
        <Box>
          <Feet />
        </Box>
      </BrowserRouter>
    </Flex>
  );
}

export default App;
