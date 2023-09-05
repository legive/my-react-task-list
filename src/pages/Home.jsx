
import { Text, Box, Flex, Center } from "@chakra-ui/react";
export default function Home() {
  return (
    <Box p={5}>
      <Flex direction='column'>
      <Box w='100%'>
    <Text as='h3' fontSize='20px' textAlign='justify' lineHeight="2">Organiza tu día es una aplicación muy útil en las actividades que desarrollamos día a día y asi llevar un eficiente control de lo ya ejecutado y de lo pendiente. 
      
    Organiza tu día se convertirá en tu mejor aliado para mantener tu vida organizada y productiva.</Text>
    </Box>
   <Center>
    <Box p={4} boxShadow="md" borderRadius="md">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/baThcWXEtto"
        title="YouTube Video Player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Box>
    </Center>
      </Flex>
      </Box>
  )
}
