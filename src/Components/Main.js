
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
      rating: 4,
      name: `Lucas Banks`, 
      description: "", 
      testimonials:'The food, service, ambience and more was all superb!!! On behalf of us all, fight on!',
        getImageSrc: () => require("../api/11.jpg"),
    }, 
    { 
      rating: 2,
      name: "Logan Elliott", 
      description: "", 
      testimonials:'"The prices were absolutely disappointing. The waiters had extremely good mood.',

        getImageSrc: () => require("../api/68.jpg"),
    }, 
    { 
      rating: 5,
      name: "Brianna Watts", 
      description: "", 
      testimonials:'The food was amazing, the staff were so polite and helpful.',

        getImageSrc: () => require("../api/54.jpg"),
    },
    { 
      rating: 4,
      name: "Tiffany Mcenzie", 
      description: "", 
      testimonials:'Great restaurant with a long history of providing our family a consistently excellent dining experience.',
        getImageSrc: () => require("../api/59.jpg"),
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