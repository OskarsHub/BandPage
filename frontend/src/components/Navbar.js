import { Link } from 'react-router-dom';
import Logo from "../images/Logo.png"
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="Navbar">
        <img src={Logo} className='navLogo'></img>
        <Link to="/" className='navLink'>Home</Link>
        <Link to="/about" className='navLink'>About</Link>
        <Link to="/gigs" className='navLink'>Gigs</Link>
      </nav>
    );
  };
  
  export default Navbar;  