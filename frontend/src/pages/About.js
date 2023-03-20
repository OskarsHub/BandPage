import { motion } from "framer-motion"

import Mattila from "../images/Mattila.png"
import Hakalin from "../images/Hakalin.png"
import Kainu from "../images/Kainu.png"

import Navbar from "../components/Navbar";
import './About.css'

const About = () => {
    return (
      <motion.div className="AboutContainer"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      >
        <Navbar/>
        <div className="bandinfo">
        <h1 id="h1">Tietoa meistä</h1>
          <p className="paragraph">Olemme Trio Hankkijat, kolme yläasteella tutustunutta 
          kaverusta, jotka jakavat yhteisen intohimon musiikkia kohtaan. 
          Pian yhteisten musiikkiharrastusten myötä päätimme perustaa oman bändin, 
          jossa pääsisimme toteuttamaan musiikillisia unelmiamme yhdessä.</p>
          <p className="paragraph">Vaikka perustamisesta on jo vuosia, soittaminen on 
          jatkunut tähän päivään asti. Yhteisen musiikillisen matkan varrella olemme 
          kohdanneet niin ylä- kuin alamäkiäkin, mutta intohimomme musiikkiin on aina 
          kantanut meitä eteenpäin.</p>
          <p className="paragraph">Tavoitteenamme onkin jatkaa musiikin esittämistä 
          ja kehittymistä yhdessä, ja saada mahdollisuus jakaa musiikkiamme myös 
          suuremman yleisön kanssa.</p>
        </div>
        <div className="members">
          <h1 id="h1">Keitä olemme?</h1>
          <div className="member1">
            <img src={Mattila} id="img"  alt="image of bandmember"></img>
            <h2>Kalle Mattila</h2>
            <h3>-Kitara ja laulu-</h3>
            <p id="text">
            Kalle on bändimme luova sielu ja monipuolinen muusikko. 
            Hän on aina valmis heittäytymään uusiin musiikillisiin haasteisiin. 
            Kallen taitava kitaransoitto ja vahva lauluääni ovat tärkeä osa bändimme soundia.
            </p>
          </div>
          <div className="member2">
            <img src={Hakalin} id="img" alt="image of bandmember"></img>
            <h2>Joonatan Hakalin</h2>
            <h3>-Basso-</h3>
            <p id="text">
            Joonatan on bändimme kivijalka, joka pitää huolen siitä, että musiikkimme 
            pysyy rytmikkäänä ja iskevänä. Hän on erittäin taitava basisti ja on 
            löytänyt oman paikkansa bändimme musiikissa. Joonatan on myös bändimme 
            tekninen tuki, joka hoitaa äänentoiston ja tekniikan kuntoon keikoilla.
            </p>
          </div>
          <div className="member3">
            <img src={Kainu} id="img" alt="image of bandmember"></img>
            <h2>Oskari Kainulainen</h2>
            <h3>-Rummut-</h3>
            <p id="text">
            Viimeisenä muttei vähäisempänä trion täyttää Oskari. Hän on bändimme 
            takuumies, joka tuo musiikkiimme voimaa ja energiaa. 
            Hänen tarkka rumpusoittonsa ja loistava rytmiaisti ovat korvaamattomia 
            bändimme soundin kannalta.
            </p>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default About;  