import logo from './assets/restauranfood.jpg'
import Card from './Card'
import TesCard from './TesCard'
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import img2 from '../src/assets/restaurant.jpg'


const projects = [ 
    { 
      title: "Brushetta", 
      price: '12.00$',
      description: "Handy tool bvia middleware️", 
        getImageSrc: () => require("../src/assets/download.jpg"),
    }, 
    { 
      title: "Greek Salad", 
      price: '10.00$',
      description: 
        "A scrollable ",   
      getImageSrc: () => require("../src/assets/greek salad.jpg"), 
    }, 
    { 
      title: "Lemon Desert", 
      price: '9.00$',
      description: 
        "Nothing", 
      getImageSrc: () => require("../src/assets/lemon dessert.jpg"), 
    }
   ]; 

   const test = [ 
    { 
      rating: 1,
      name: "Name1", 
      description: "about p1", 
      testimonials:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.i ut aliqr rent,borum."',
        getImageSrc: () => require("../src/assets/Mario and Adrian b.jpg"),
    }, 
    { 
      rating: 2,
      name: "Name2", 
      description: "about p2", 
      testimonials:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.i ut aliqr rent,borum."',

        getImageSrc: () => require("../src/assets/Mario and Adrian b.jpg"),
    }, 
    { 
      rating: 3,
      name: "Name3", 
      description: "about p3", 
      testimonials:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.i ut aliqr rent,borum."',

        getImageSrc: () => require("../src/assets/Mario and Adrian A.jpg"),
    },
    { 
      rating: 5,
      name: "Name4", 
      description: "about p4", 
      testimonials:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.i ut aliqr rent,borum."',
        getImageSrc: () => require("../src/assets/Mario and Adrian A.jpg"),
    }
   ]; 





function Main() {
    return ( <main> 
        <section className="hero">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, nisi est! Dolorem quia inventore nesciunt, ipsum neque culpa ea porro voluptatum. Voluptate ex ad nesciunt vel incidunt, velit cupiditate hic.
</p>
        <button className='resbtn btn'><a href='/reserve'>Reserve table</a></button>
        <img src={logo}/>
        </section>
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
         <TesCard 
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
        <section className="about">
        <HStack display='flex' justifyContent='space-between' maxHeight='300px'>
            <VStack>
            <h2>About us</h2>
            <p>this text is about us</p>
            </VStack>
            <img src={img2} width='fitContent' height='75%'></img>
            <img src={img2} width='fitContent%' height='75%'></img>
            </HStack>
          </section>

    </main>)
}
export default Main;