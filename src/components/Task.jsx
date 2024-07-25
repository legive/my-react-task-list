/* eslint-disable react/prop-types */

import { useState } from "react";
import { Box, Center, Input } from "@chakra-ui/react";
import {
  Checkbox,
  Stack,
  Heading,
  Card,
  Flex,
  StackDivider,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export default function Task({
  item,
  id,
  taskN,
  // eslint-disable-next-line no-unused-vars
  taskD,
  isComplete,
  date,
  handleDeleteTask,
  handleUpdate,
  handleCheckUpdate,
}) {
  // Aquí almacenamos el número de tarea

  const [checkedStatus, setcheckedStatus] = useState(isComplete);
  const [display, setDisplay] = useState("none");
    const [displayTask, setDisplayTask] = useState("");
  const [updatedTask, setupdatedTask] = useState(taskN);
  const [today, setToday] = useState(date);

  const handleDisplay = () => {
    display ? setDisplay("") : setDisplay("none");
    displayTask ? setDisplayTask("") : setDisplayTask("none");
  };

   const checkTasks = (isComplete) => {
     const newState = !isComplete;
     setcheckedStatus(newState);
     handleCheckUpdate(id);
   };

  const handleUpdatedTask = (e) => {
    const ntexto=e.target.value
    setupdatedTask(ntexto);
    console.log("task actualizada",updatedTask)
  };
    const handleClick = () => {
    handleUpdate(id, updatedTask, taskD, checkedStatus, today);
      setDisplay("none");
      setDisplayTask("");
  };
   const handleDateChange = (event) => {
     setToday(event.target.value);
   };
  
  return (
    <Center>
      <Box w="100%">
        <Card w="auto" h="120px" mt="10px" borderWidth={1}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="2">
              <Box w="100%">
                <Flex
                  direction="row"
                  gap={2}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Box w="100%">
                    <Box w="50%">
                      <Checkbox
                        colorScheme="pink"
                        isChecked={checkedStatus}
                        type="checkbox"
                      >
                        <Text display={displayTask}>{date}</Text>
                        <Input
                          type="date"
                          value={today}
                          onChange={handleDateChange}
                          required
                          display={display}
                        />
                      </Checkbox>
                    </Box>

                    <Box>
                      <Flex gap={2} justifyContent={"space-around"}>
                        <Heading
                          display={displayTask}
                          as="h3"
                          size="sm"
                          w="100%"
                          className={`${checkedStatus ? "terminada" : ""}`}
                          onClick={() => checkTasks(checkedStatus)}
                        >
                          {item}- {taskN}{" "}
                        </Heading>
                        <Input
                          w="100%"
                          value={updatedTask}
                          display={display}
                          onChange={handleUpdatedTask}
                        ></Input>
                        {/* Botones de editar y eliminar */}
                        <Box>
                          <Flex gap={2}>
                            <IconButton
                              colorScheme="red"
                              onClick={handleClick}
                              aria-label="Editar"
                              icon={<CheckIcon />}
                              size="md"
                              display={display}
                            />
                            <IconButton
                              colorScheme="teal"
                              onClick={handleDisplay}
                              aria-label="Editar"
                              icon={<EditIcon />}
                              size="md"
                              display={displayTask}
                            />

                            <IconButton
                              bg="#FED7E2"
                              onClick={() => handleDeleteTask(id)}
                              aria-label="Editar"
                              icon={<DeleteIcon />}
                              size="md"
                            />
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Text pt="2" fontSize="sm" align="left"></Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Center>
  );
}
