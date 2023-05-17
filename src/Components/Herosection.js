import logo from '../assets/restauranfood.jpg'
export default function Herosection () 
{
return <section className="hero">
<h1>Little Lemon</h1>
<h3>Chicago</h3>
<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
<button className='resbtn btn'><a href='/BookingPage'>Reserve table</a></button>
<img src={logo}/>
</section> }
