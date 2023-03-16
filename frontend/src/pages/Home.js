import { Link } from 'react-router-dom';

import Bandimage5 from "../images/Bandimage3.jpg"
import AboutButton from "../images/AboutButton.jpg";
import GigsButton from "../images/GigsButton.jpg";

import './Home.css'

const Home = () => {
    return (
      <div className="homeContainer">
        <div className="banner">
          <img src={Bandimage5} className='bandHome'></img>
        </div>
        <div className="homeAbout">
          <h1 id="h1">Trio Hankkijat</h1>
          <h2 id="h2">Yhtye joka soittaa kotimaista iskelmää sydämellä</h2>
        </div>
        <div className="imgButtons">
          <Link to="/about">
            <img src={AboutButton} className='imgButtonleft'></img>
          </Link>
          <Link to="/gigs">
            <img src={GigsButton} className='imgButtonright'></img>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Home;  