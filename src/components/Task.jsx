/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { Box, Center, Input, Link, FormControl } from "@chakra-ui/react";
import {
  Checkbox,
  Stack,
  Heading,
  Card,
  Flex,
  StackDivider,
  CardBody,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
// import MyModal from "./MyModal";

export default function Task({
  background,
  item,
  id,
  taskN,
  taskD,
  isComplete,
  date,
  handleDeleteTask,
  handleUpdate,
  handleCheckUpdate,
}) {
  // const { isOpen, onClose } = useDisclosure();
  const [checkedStatus, setcheckedStatus] = useState(isComplete);
  const [display, setDisplay] = useState("none");
  const [displayTask, setDisplayTask] = useState("");
  const [displayD, setDisplayD] = useState("none");
  const [updatedTask, setupdatedTask] = useState(taskN);
    const [updatedTaskD, setupdatedTaskD] = useState(taskD);
  const [today, setToday] = useState(date);
  const [text, setText] = useState("Mostrar");
    const [error, setError] = useState("");
  const [error2, setError2] = useState("");
   const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  
   useEffect(() => {
     setError3(updatedTask.length);
     setError4(updatedTaskD.length);
     if (updatedTaskD.length >= 200) {
       setError2("Sólo se permiten de 200 caracteres");
      
     }
     if (updatedTask.length >= 50) {
       setError("Sólo se permiten de 50 caracteres");
   
     }
     if (!updatedTask == "") {
       
       if (updatedTask.length > 3) {
         setError("");
    
       } else {
         setError("La tarea debe contener mas de 3 caracteres");
       
       }
     }
   }, [updatedTask, updatedTaskD]);
  



    function handleSubmit(event) {
      event.preventDefault();
    }
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
    const ntexto = e.target.value;
    setupdatedTask(ntexto);
  
  };

    const handleUpdateDetails = (e) => {
      const ntexto = e.target.value;
      setupdatedTaskD(ntexto);

    };

  const handleClick = () => {

    if (updatedTask == "") {
      setError("Ingrese una tarea")
      console.log(error);
      
    } else if (updatedTask.length <= 3) {
      setError("La tarea debe contener mas de 3 caracteres");
      console.log(error)
     
    } else if (updatedTaskD.length >= 200) {
      setError2("Sólo se permiten de 200 caracteres");
      console.log(error2)
      
    } else if (updatedTask.length >= 50) {
      setError("Sólo se permiten de 50 caracteres");
      console.log(error);
    
    } else {
      console.log(updatedTaskD)
      handleUpdate(id, updatedTask, updatedTaskD, checkedStatus, today);
      setDisplay("none");
      setDisplayTask("");
      setError("");
      setError2("");

    }
   
  };

  const handleDateChange = (event) => {
    setToday(event.target.value);
  };

  const handleText = () => {
    text == "Mostrar" ? setText("Ocultar") : setText("Mostrar");
    displayD == "" ? setDisplayD("none") : setDisplayD("");
  };

  return (
    <Center>
      <Box w="100%">
        <Card
          w="100%"
          h="auto"
          mt="10px"
          borderWidth={1}
          background={background}
        >
          <CardBody>
            <Stack divider={<StackDivider />} spacing="2">
              <FormControl w="100%" onClick={handleSubmit}>
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
                        <Flex w="100%" flexDirection="column">
                          <Input
                            w="100%"
                            value={updatedTask}
                            display={display}
                            onChange={handleUpdatedTask}
                          ></Input>
                          <Text fontSize="xs" color="red">
                            {error}
                          </Text>
                          <Text display={display} fontSize="xs" color="red">
                            {error3}
                          </Text>
                        </Flex>
                        {/* Botones de editar y eliminar */}
                        <Box>
                          <Flex
                            gap={2}
                            direction={{ base: "column", md: "row" }}
                          >
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
                    <Link fontSize={"sm"} color={"pink"} onClick={handleText}>
                      {text} detalles
                    </Link>

                    {/* <MyModal
                      isOpen={isOpen}
                      onClose={onClose}
                      taskName={taskN}
                      taskDescription={taskD}
                      taskDate={today}
                      taskState={isComplete}
                    /> */}

                    <Text display={displayD}>{taskD}</Text>
                    <Flex w="100%" flexDirection="column">
                      <Textarea
                        textAlign={"justify"}
                        display={display}
                        value={updatedTaskD}
                        onChange={handleUpdateDetails}
                      ></Textarea>
                      <Text fontSize="xs" color="red">
                        {error2}
                      </Text>
                      <Text display={display} fontSize="xs" color="red">
                        {error4}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </FormControl>

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
