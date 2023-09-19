/* eslint-disable react/prop-types */

import { useState } from "react";
import { Box } from "@chakra-ui/react";
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
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

export default function Task({
  item,
  id,
  taskN,
  taskD,
  isComplete,
  handleDeleteTask,
  handleUpdate,
  handleCheckUpdate,
}) {
  // Aquí almacenamos el número de tarea

  const [checkedStatus, setcheckedStatus] = useState(isComplete);

  const checkTasks = (isComplete) => {
    const newState = !isComplete;
    setcheckedStatus(newState);
    handleCheckUpdate(id);
  };
  return (
    <Box w="100%">
      <Card w="100%" h="auto" mt="10px" borderWidth={1}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="2">
            <Box w="100%">
              <Heading size="xs" textTransform="uppercase">
                <Checkbox
                  colorScheme="pink"
                  isChecked={checkedStatus}
                  type="checkbox"
                  onChange={() => checkTasks(checkedStatus)}
                >
                  <Flex direction="row" gap={10}>
                    <Box w="750px">
                      <Heading
                        as="h3"
                        size="sm"
                        w="100"
                        className={`${checkedStatus ? "terminada" : ""}`}
                      >
                        {item}- {taskN}{" "}
                      </Heading>
                    </Box>
                    <Box>
                      <Flex gap={2}>
                        <IconButton
                          colorScheme="teal"
                          onClick={() => handleUpdate(id)}
                          aria-label="Editar"
                          icon={<EditIcon />}
                          size="md"
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
                </Checkbox>
              </Heading>
            </Box>

            <Box>
              <Text pt="2" fontSize="sm" align="left">
                {taskD}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
