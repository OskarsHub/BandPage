import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

import Bandimage5 from "../images/Bandimage3.jpg"
import AboutButton from "../images/AboutButton.jpg";
import GigsButton from "../images/GigsButton.jpg";

import Navbar from "../components/Navbar";
import './Home.css'

const Home = () => {
    return (
      <motion.div className="homeContainer"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      >
        <Navbar/>
        <div className="banner">
          <img src={Bandimage5} className='bandHome' alt="Whole screen image for homepage"></img>
        </div>
        <div className="homeAbout">
          <h1 id="h1">Trio Hankkijat</h1>
          <h2 id="h2">Yhtye joka soittaa kotimaista iskelmää sydämellä</h2>
        </div>
        <div className="imgButtons">
          <Link to="/about">
            <img src={AboutButton} className='imgButtonleft' alt="image that is link for About page"></img>
          </Link>
          <Link to="/gigs">
            <img src={GigsButton} className='imgButtonright'  alt="image that is link for Gigs page"></img>
          </Link>
        </div>
      </motion.div>
    );
  };
  
  export default Home;  