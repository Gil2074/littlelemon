import logo from './assets/restauranfood.jpg'
import Card from './Card'


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
      name: "Person1", 
      description: "Handy tool bvia middleware️", 
        getImageSrc: () => require("../src/assets/Mario and Adrian b.jpg"),
    }, 
    { 
      name: "Person2", 
      description: "Handy tool bvia middleware️", 
        getImageSrc: () => require("../src/assets/Mario and Adrian b.jpg"),
    }, 
    { 
      name: "Person3", 
      description: "Handy tool bvia middleware️", 
        getImageSrc: () => require("../src/assets/Mario and Adrian A.jpg"),
    },
    { 
      name: "Person3", 
      description: "Handy tool bvia middleware️", 
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
        <button className='resbtn btn'>Reserve table</button>
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
         <Card 
           key={project.name} 
           title={project.name} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 
       ))} 
            </div>
        </section>
        <section className="about">test4</section>
    </main>)
}
export default Main;