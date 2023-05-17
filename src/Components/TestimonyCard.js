import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import  {faStar} from '@fortawesome/free-solid-svg-icons'
import { wrap } from "framer-motion";
const TestimonyCard = ({ name, description, imageSrc ,testimonials,rating}) => { 
   return ( 
     <VStack 
     color="black" 
     backgroundColor="#edefee" 
     cursor="pointer" 
     flexBasis='20%'
     pos='relative'
     borderRadius='20px'
     flexWrap='wrap'
     aria-label='Testimony Card'
     >
<Heading m='0' aria-label='Testifier Rating'>  {
[...Array(rating)].map((elementInArray, index) => ( 
    <span key={index}>
    <FontAwesomeIcon icon={faStar} style={{color: "#ceb71c"}  } size="xs" />
    </span>
)) }
</Heading>
      <HStack display='flex' justifyContent='flex-start' minWidth='0' margin={5} >
        <Image src={imageSrc} alt='testifier image'width='75%' h='75%' mtop='0' borderRadius={10} minWidth='0'/>
        <VStack> <Heading as='h3'color='black' aria-label='Testifier Name'>{name}</Heading>
        <Text color='black' mtop='0' aria-label='Testifier Description'>{description}</Text>
        </VStack>
        </HStack>
        <Text color='black' p='10px' aria-label='Testimony'>{testimonials} </Text>
     </VStack>

   ); 
}; 
 
export default TestimonyCard; 