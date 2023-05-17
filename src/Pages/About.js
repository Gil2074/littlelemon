import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import img2 from '../assets/restaurant.jpg'
import {aboutuspara} from '../Components/Main'

function About() {
return (
            <section className="aboutclass" >
          <HStack display='flex' justifyContent='space-evenly' width='100%'>
            <VStack ml='50px' maxWidth='700px'>
              <Heading as='h2'>About us</Heading>
              <Text >{aboutuspara}</Text>
            </VStack>
            <Image src={img2} width="fit-content" height='300px' padding='20px' transform='translation(150px)' minWidth='0'/> 
            </HStack>
        </section>
)
}

export default About;