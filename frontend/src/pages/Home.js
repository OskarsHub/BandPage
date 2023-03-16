import Bandimage5 from "../images/Bandimage3.jpg"
import './Home.css'

const Home = () => {
    return (
      <div className="homeContainer">
        <div className="banner">
          <img src={Bandimage5} className='bandHome'></img>
        </div>
      </div>
    );
  };
  
  export default Home;  