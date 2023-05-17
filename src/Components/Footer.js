import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import img from '../assets/footer-logo.png';

const navinfo = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Menu', link: '/menu' },
  { name: 'Reserve a table', link: '/BookingPage' },
  { name: 'Order online', link: '/order' },
  { name: 'login', link: '/login' }
];

const contactinfo = [
  { name: '2395 Maldove way, Chicago Illinois' },
  { name: '(629)-243-6827', link: 'tel:629-243-6827' },
  { name: 'info@littlelemon.com', link: 'mailto:info@littlelemon.com' }
];

const socials = [
  { name: 'Facebook', link: 'Facebook', Img: require('../assets/facebook.svg').default },
  { name: 'Instagram', link: 'Instagram', Img: require('../assets/instagram.svg').default }
];

function Footer() {
  return (
    <footer>
      <HStack justifyContent='space-evenly' alignItems='flex-start'>
        <Image src={img} alt="Logo" alignSelf='center' w='80px'/>

        <VStack>
          <ul>
            <Text as="h2">Navigation</Text>
            {navinfo.map(f => <li key={f.name}><a href={f.link}>{f.name}</a></li>)}
          </ul>
        </VStack>
        <VStack>
          <ul>
            <Text as="h2">Contact</Text>
            {contactinfo.map(f => <li key={f.name}><a href={f.link}>{f.name}</a></li>)}
          </ul>
        </VStack>
        <VStack>
          <ul>
            <Text as="h2">Connect</Text>
            {socials.map(f => (
              <li key={f.name}>
                <a href={f.link}>
                  <Image src={f.Img} alt={f.name} boxSize="20px" mr={5} />
                  {f.name}
                </a>
              </li>
            ))}
          </ul>
        </VStack>
      </HStack>
    </footer>
  );
}

export default Footer;
