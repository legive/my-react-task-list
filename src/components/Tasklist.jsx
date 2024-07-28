import { useState, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import Task from "./Task";
import {
  Box,
  Flex,
  Button,
  FormControl,
  Input,
  Textarea,
  Card,
  CardBody,
  Text,
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
    handleCheckUpdate,
    UpdateTask,
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

  const [isCheckedToday, setIsCheckedToday] = useState(false);

  const [today, setToday] = useState("");

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString("en-CA");
    setToday(currentDate);
    limpiar()
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

  function handleUpdate(id, updatedTask, taskDesc, taskCk, taskDate) {
    const newTask = {
      id: id,
      name: updatedTask,
      description: taskDesc,
      isComplete: taskCk,
      date: taskDate,
    };
    console.log("nueva tarea", newTask);
    UpdateTask(newTask);
  }

  function handleAddTask() {
    const newTask = {
      id: taskId,
      name: taskName,
      description: taskDescription,
      isComplete: taskCheck,
      date: today,
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
  };

  const handleChangeDescription = (e) => {
    settaskDescription(e.target.value);
  };

  const handleDateChange = (event) => {
    setToday(event.target.value);
  };

  const handleCheckToday = (event) => {
    setIsCheckedToday(event.target.checked);
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
              <Card w="100%" h="auto" borderWidth={1} marginBottom={"10px"}>
                <CardBody>
                  <Heading
                    color={"rgb(228, 150, 193)"}
                    size="lg"
                    textTransform="uppercase"
                  >
                    Nueva tarea
                  </Heading>

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
                        defaultValue={taskDescription}
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
                          isChecked={isCheckedToday}
                          onChange={handleCheckToday}
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
                </CardBody>
              </Card>
            </Center>
          </FormControl>
          <Box w="100%">
            <Flex gap={10} flexDir={"column"}>
              <Box w="100%" border="1px" borderRadius="10px" padding="20px">
                <Heading>Pendientes</Heading>
                {tasklistArray

                  .sort((a, b) =>
                    a.isComplete === false ? -1 : b.isComplete === false ? 1 : 0
                  )
                  .filter((task) => task.isComplete == false)
                  .filter((task) =>
                    isCheckedToday == true ? task.date == today : task.date
                  )
                  .sort((a, b) => new Date(a.date) - new Date(b.date))

                  .map((task, index) => (
                    <Box key={task.id} className="" w="100%">
                      <Task
                        background="none"
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

              <Box w="100%" border="1px" borderRadius="10px" padding="20px">
                <Heading>Terminadas</Heading>
                {tasklistArray

                  .sort((a, b) =>
                    a.isComplete === false ? -1 : b.isComplete === false ? 1 : 0
                  )
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .filter((task) => task.isComplete == true)

                  .map((task, index) => (
                    <Box key={task.id} className="" w="100%">
                      <Task
                        background="#f8efed"
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
            El: {calculateCompletion().toFixed(2)}% de tus tareas ha sido
            completado
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
