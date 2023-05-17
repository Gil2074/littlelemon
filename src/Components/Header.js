import img from '../assets/Logo.svg'

function Header(props) {
    return (<header> <img src={img}/> {props.children}</header>)
}

export default Header;