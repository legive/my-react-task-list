//rafc para crear la estruxtura de una funcion

import { useState, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import Task from "./Task";
import TaskEnded from "./Task";
import {
  Box,
  Flex,
  Button,
  FormControl,
  Input,
  Textarea,
  Card,
  StackDivider,
  CardBody,
  Text,
  Stack,
  Heading,
  Center,
  Checkbox,
} from "@chakra-ui/react";

export default function Tasklist() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  const [
    tasklistArray,
    addTask,
    handleDeleteTask,
    handleDeleteCompletedTask,
    UpdateTask,
    handleCheckUpdate,
    taskPendients,
    taskCompletes,
  ] = useActions();

  
  const [taskName, settaskName] = useState("");
  const [taskId, settaskId] = useState(Date.now());
  const [taskCheck, settaskCheck] = useState(false);
  const [taskDescription, settaskDescription] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [activeButton, setActiveButton] = useState(true);
  
  const [isChecked, setIsChecked] = useState(false);
     
  
  const [today, setToday] = useState("");

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString("en-CA");
    setToday(currentDate);
  }, []);
  
  
  //const [taskDate, settaskDate] = useState("");

  useEffect(() => {
    setError2(taskDescription.length);
    setError3(taskName.length);
    if (taskDescription.length >= 200) {
      setError2("Sólo se permiten de 200 caracteres");
      setActiveButton(false);
    }
    if (taskName.length >= 50) {
      setError("Sólo se permiten de 50 caracteres");
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
    if (taskName == "") {
      // setError("Ingrese una tarea")
      setActiveButton(true);
    } else {
      if (taskName.length > 3) {
        setError("");
        setActiveButton(false);
      } else {
        setError("La tarea debe contener mas de 3 caracteres");
        setActiveButton(true);
      }
    }
  }, [taskName, taskDescription, taskCheck, tasklistArray]);

  function limpiar() {
    settaskId(Date.now());
    settaskName("");
    settaskDescription("");
    settaskCheck(false);
  }

  
  function handleUpdate(id, taskNm, taskDesc, taskCk, taskDate) {
    settaskId(id);
    settaskName(taskNm);
      settaskDescription(taskDesc);
    settaskCheck(taskCk);
    setToday(taskDate);

    const newTask = {
      id: taskId,
      name: taskName,
      description: taskDescription,
      isComplete: taskCheck,
      date: today,
    };
    console.log("nueva tarea",newTask)
    //UpdateTask(newTask);
  }

  function handleAddTask() {
    const newTask = {
      id: taskId,
      name: taskName,
      description: taskDescription,
      isComplete: taskCheck,
      date:today,
    };

    if (taskName == "") {
      //setError("Ingrese una tarea")
      setActiveButton(true);
    } else if (taskName.length <= 3) {
      setError("La tarea debe contener mas de 3 caracteres");
      setActiveButton(true);
    } else if (taskDescription.length >= 200) {
      setError2("Sólo se permiten de 200 caracteres");
      setActiveButton(false);
    } else if (taskName.length >= 50) {
      setError("Sólo se permiten de 50 caracteres");
      setActiveButton(true);
    } else {
      setActiveButton(false);
      addTask(newTask);
      limpiar();
    }
  }
  const handleChangeTask = (e) => {

    //agregar la tarea wn mayuscula
  settaskName(e.target.value.toUpperCase());
  }

  const handleChangeDescription = (e) => {
    settaskDescription(e.target.value)
  }

    const handleDateChange = (event) => {
      setToday(event.target.value);
    };
  

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    
  };
  
    const calculateCompletion = () => {
      if (tasklistArray.length === 0) return 0;
      return (taskCompletes * 100) / tasklistArray.length;
    };
  
  

  return (
    <Center>
      <Box w="60vw">
        <Flex direction="column" justify="center" align="center">
          <FormControl onSubmit={handleSubmit}>
            <Center>
              <Card w="100%" h="auto" borderWidth={1}>
                <CardBody>
                  <Heading
                    color={"rgb(228, 150, 193)"}
                    size="lg"
                    textTransform="uppercase"
                  >
                    Nueva tarea
                  </Heading>
                  <Stack divider={<StackDivider />} spacing="2">
                    <Box>
                      <Input
                        onChange={handleChangeTask}
                        type="text"
                        value={taskName}
                        placeholder={"Titulo"}
                      />

                      <Box
                        align="left"
                        color=" rgb(228, 150, 193);"
                        border="0px"
                        width="100%"
                      >
                        <Flex>
                          <Box border="0px" width="97%">
                            <Text fontSize="15">{error}</Text>
                          </Box>
                          <Box border="0px" width="3%" justifyContent="Center">
                            <Text fontSize="15">{error3}</Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>

                    <Box>
                      <Text pt="2" fontSize="sm" align="left">
                        <Textarea
                          onChange={handleChangeDescription}
                          type="text"
                          value={taskDescription}
                          placeholder={"Descripción detallada"}
                        />
                      </Text>

                      <Box
                        align="left"
                        color=" rgb(228, 150, 193);"
                        border="0px"
                        width="100%"
                      >
                        <Flex>
                          <Box border="0px" width="97%">
                            <Text fontSize="15"></Text>
                          </Box>
                          <Box border="0px" width="3%" textAlign="left">
                            <Text fontSize="15">{error2}</Text>
                          </Box>
                        </Flex>
                        <Flex flexDirection={"column"}>
                          <Input
                            type="date"
                            value={today}
                            onChange={handleDateChange}
                            required
                          />
                          <Checkbox
                            isChecked={isChecked}
                            onChange={handleCheckboxChange}
                          >
                            Mostrar las tareas de hoy
                          </Checkbox>
                        </Flex>
                      </Box>

                      <Button
                        mt="5"
                        onClick={handleAddTask}
                        colorScheme="teal"
                        variant="solid"
                        isDisabled={activeButton}
                      >
                        Agregar
                      </Button>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Center>
          </FormControl>
          <Box w="100%">
            <Flex gap={10}>
              <Box w="50%" border="2px" borderRadius="10px" padding="20px">
                <Heading>Pendientes</Heading>
                {tasklistArray

                  .sort((a, b) =>
                    a.isComplete === false ? -1 : b.isComplete === false ? 1 : 0
                  )
                  .filter((task) => task.isComplete == false)

                  .map((task, index) => (
                    <Box key={task.id} className="" w="100%">
                      <Task
                        item={index + 1}
                        id={task.id}
                        taskN={task.name}
                        taskD={task.description}
                        isComplete={task.isComplete}
                        date={task.date}
                        taskList={tasklistArray}
                        handleDeleteTask={handleDeleteTask}
                        handleUpdate={handleUpdate}
                        handleCheckUpdate={handleCheckUpdate}
                      />
                    </Box>
                  ))}
              </Box>

              <Box w="50%" border="2px" borderRadius="10px" padding="20px">
                <Heading>Terminadas</Heading>
                {tasklistArray

                  .sort((a, b) =>
                    a.isComplete === false ? -1 : b.isComplete === false ? 1 : 0
                  )
                  .filter((task) => task.isComplete == true)

                  .map((task, index) => (
                    <Box key={task.id} className="" w="100%">
                      <TaskEnded
                        item={index + 1}
                        id={task.id}
                        taskN={task.name}
                        taskD={task.description}
                        isComplete={task.isComplete}
                        date={task.date}
                        taskList={tasklistArray}
                        handleDeleteTask={handleDeleteTask}
                        handleUpdate={handleUpdate}
                        handleCheckUpdate={handleCheckUpdate}
                      />
                    </Box>
                  ))}
              </Box>
            </Flex>
          </Box>

          <br></br>
          <Heading as="h6" size="md">
            Tareas:{tasklistArray.length} Terminadas:{taskCompletes} Pendientes:
            {taskPendients}
          </Heading>
          <Heading as="h6" size="lg">
            El: {calculateCompletion().toFixed(2)}% de tu día ha sido completado
          </Heading>
          <br></br>

          <Button
            onClick={handleDeleteCompletedTask}
            colorScheme="teal"
            variant="solid"
          >
            Eliminar las tareas terminadas
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}
