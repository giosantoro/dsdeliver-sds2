import './styles.css';
import { ReactComponent as Logo} from './logo.svg';
import { Link } from 'react-router-dom';
function Navbar (){
    return (
        //no react não é usada a palavra class, sim className
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default Navbar;