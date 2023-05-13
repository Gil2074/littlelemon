import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
import img from './assets/Logo .svg'

const navinfo= [
    {name: 'Home',
    link:'/about',
    },
    {name: 'About',
    link:'/reserve'},
    {name: 'Menu',
    link:'/menu'},
    {name: 'Reserve a table',
    link:'/reserve'},
    {name: 'Order online',
    link:'/order'},
    {name: 'login',
    link:'/login'}
]

function Footer() {
    return (<footer>
        <HStack 
        justifyContent='space-evenly'>
            <Image src={img}/>
            <VStack>
            <ul>
                <h2>Navigation</h2>
             {navinfo.map(f =>  <li><a href={f.link}>{f.name}</a></li> )}
            </ul>
            </VStack>
            <VStack>
            <ul>
             <h2>Contact</h2>
             {navinfo.map(f =>  <li><a href={f.link}>{f.name}</a></li> )}
            </ul>
            </VStack>
            <VStack>
            <ul>
             <h2>Connect</h2>
             {navinfo.map(f =>  <li><a href={f.link}>{f.name}</a></li> )}
            </ul>
            </VStack>
        </HStack>
    </footer>)
}
export default Footer;