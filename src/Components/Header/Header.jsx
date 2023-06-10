import React from "react";
import CTA from "./CTA";
import './Header.css'
import ME from '../../Assets/me.png';
import Aadarsh from '../../Assets/Aadarsh.png'
import HeaderSocials from "./HeaderSocials";
import {FaPrayingHands} from 'react-icons/fa'



function Header () {
      
      return<>
            <header>
                  <div className="container header__container">
                        <h3>Namaste! &nbsp; <FaPrayingHands/> &nbsp;&nbsp; I'm </h3>
                        <h1>Aadarshbhushan Singh</h1>
                        <h5 className="text-light">Fullstack Developer</h5>
                        <CTA></CTA>
                        <HeaderSocials/>

                        <div className="me">
                              <img src={Aadarsh} alt="MY IMAGE HERE" />
                        </div>
                        
                        <a className="scroll__down" href="#contact">Scroll Down</a>
                  </div>

            </header>
      </>
}

export default Header;