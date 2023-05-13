import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import  {faStar} from '@fortawesome/free-solid-svg-icons'
import { wrap } from "framer-motion";
const TesCard = ({ name, description, imageSrc ,testimonials,rating}) => { 
   return ( 
     <VStack
     color="black" 
     backgroundColor="#edefee" 
     cursor="pointer" 
     flexBasis='20%'
     pos='relative'
     borderRadius='20px'
     flexWrap='wrap'
     >
<Heading m='0'>  {
[...Array(rating)].map((elementInArray, index) => ( 
    <span key={index}>
    <FontAwesomeIcon icon={faStar} style={{color: "#ceb71c"}  } size="xs" />
    </span>
)) }
</Heading>
      <HStack display='flex' justifyContent='flex-start' minWidth='0' margin={5}>
        <Image src={imageSrc} width='75%' h='75%' mtop='0' borderRadius={10} minWidth='0'/>
        <VStack> <Heading as='h3'color='black'>{name}</Heading>
        <Text color='black' mtop='0'>{description}</Text>
        </VStack>
        </HStack>
        <Text color='black' p='10px'>{testimonials}</Text>
     </VStack>

   ); 
}; 
 
export default TesCard; 