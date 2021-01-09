import './styles.css';
import { ReactComponent as Logo} from './logo.svg';
function Navbar (){
    return (
        //no react não é usada a palavra class, sim className
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;