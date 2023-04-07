import img from './img.png'

const styli ={
    width:'20%',
    height:'50%'
}
function Header() {
    return (<header><img src={img} style={styli}/></header>)
}

export default Header;