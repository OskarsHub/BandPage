import { Link } from 'react-router-dom';
import Logo from "../images/Logo.png"
import Faceicon from "../images/Faceicon.png"
import './Navbar.css'

const Navbar = () => {
    return (
      <div className="Navbar">
      <img src={Logo} className='navLogo'/>
      <nav className="Links">
        <Link to="/" className='navLink'>Home</Link>
        <Link to="/about" className='navLink'>About</Link>
        <Link to="/gigs" className='navLink'>Gigs</Link>
        <Link to="https://www.facebook.com/TrioHankkijat" target="_blank" rel="noreferrer">
          <img src={Faceicon} className='faceLink'></img>
        </Link>
      </nav>
      </div>
    );
  };
  
  export default Navbar;  