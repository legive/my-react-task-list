
import { Text, Box, Flex } from "@chakra-ui/react";
export default function Home() {
  return (
    <Box p={5}>
      <Flex direction='column'>
      <Box w='100%'>
    <Text as='h3' size='xl' textAlign='justify' lineHeight="2">Es una aplicación muy útil en las actividades que desarrollamos día a día y asi llevar un eficiente control de lo ya ejecutado y de lo pendiente. 
      
    Organiza tu día se convertirá en tu mejor aliado para mantener tu vida organizada y productiva.</Text>
    </Box>
   
    <Box maxW="800px" mx="auto">
        <video width="100%" controls>
          <source src="/ruta-del-video.mp4" type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
      </Box>
      </Flex>
      </Box>
  )
}
