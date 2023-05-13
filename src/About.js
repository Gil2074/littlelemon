import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import img2 from '../src/assets/restaurant.jpg'

function About() {
return (
            <section className="aboutclass" >
          <HStack display='flex' justifyContent='space-evenly' width='100%'>
            <VStack ml='50px'>
              <Heading as='h2'>About us</Heading>
              <Text>Lorem</Text>
            </VStack>
            <Image src={img2} width="fit-content" height='300px' padding='20px' transform='translation(150px)' minWidth='0'/> 
            </HStack>
        </section>
)
}

export default About;