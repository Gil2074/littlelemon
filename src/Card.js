import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import React from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Card = ({ title,price, description, imageSrc }) => { 
   return ( 
     <VStack
       color="black" 
       backgroundColor="edefee" 
       cursor="pointer" 
       flexBasis='20%'
       pos='relative'
       borderRadius='20px'
     > 
       <Image src={imageSrc} alt={title} width='100%' h='75%' borderRadius='15px' margin={0}/> 
       <VStack spacing={4} p={4} alignItems="flex-start" w='100%'> 
         <HStack justifyContent="space-between" alignItems="center" width='100%'> 
           <Heading as="h3" size="md" color='black' > 
             {title} 
           </Heading> 
           <Heading as="h3" size="md" color='coral'> 
             {price}
           </Heading> 
         </HStack> 
         <Text color="#64748b" fontSize="lg"> 
           {description} 
         </Text> 
         <HStack spacing={2} alignItems="center" color='black'> 
            <Text color="black" fontSize="1rem" mr='10px' > 
            Order a delivery
         </Text> 
         <FontAwesomeIcon icon={faCoffee}  />
         </HStack> 
       </VStack> 
     </VStack> 
   ); 
}; 
 
export default Card; 