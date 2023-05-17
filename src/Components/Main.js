
import Card from '../Components/Card'
import TestimonyCard from '../Components/TestimonyCard'
import Herosection from '../Components/Herosection';
import About from '../Pages/About'
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import img2 from '../assets/restaurant.jpg'


export const aboutuspara = `Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
continue to oversee the Little Lemon restaurant, nearly thirty years later.`

const projects = [ 
    { 
      title: "Brushetta", 
      price: '$5.99',
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.", 
        getImageSrc: () => require("../assets/download.jpg"),
    }, 
    { 
      title: "Greek Salad", 
      price: '$12.99',
      description: 
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",   
      getImageSrc: () => require("../assets/greek salad.jpg"), 
    }, 
    { 
      title: "Lemon Desert", 
      price: '$5.00',
      description: 
        "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.", 
      getImageSrc: () => require("../assets/lemon dessert.jpg"), 
    }
   ]; 

   const test = [ 
    { 
      rating: 1,
      name: "Name1", 
      description: "about p1", 
      testimonials:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.i ut aliqr rent,borum."',
        getImageSrc: () => require("../assets/Mario and Adrian b.jpg"),
    }, 
    { 
      rating: 2,
      name: "Name2", 
      description: "about p2", 
      testimonials:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.i ut aliqr rent,borum."',

        getImageSrc: () => require("../assets/Mario and Adrian b.jpg"),
    }, 
    { 
      rating: 3,
      name: "Name3", 
      description: "about p3", 
      testimonials:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.i ut aliqr rent,borum."',

        getImageSrc: () => require("../assets/Mario and Adrian A.jpg"),
    },
    { 
      rating: 5,
      name: "Name4", 
      description: "about p4", 
      testimonials:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.i ut aliqr rent,borum."',
        getImageSrc: () => require("../assets/Mario and Adrian A.jpg"),
    }
   ]; 

function Main() {
    return ( <main> 
        <Herosection/>
        <section className="specials">
            <div>
            <h2>This week specials!</h2>
            <button className='ordertn btn'>Order online</button>
            </div>
            <div>
            {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           price={project.price} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
            </div>
            </section>
        <section className="testimonials">
          <div>
            {test.map((project) => ( 
         <TestimonyCard 
           key={project.name} 
           name={project.name} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
           testimonials={project.testimonials}
           rating={project.rating} 
         /> 
       ))} 
            </div>
        </section>
<About/>
    </main>)
}
export default Main;