import React from "react";
import CTA from "./CTA";
import './Header.css'
import ME from '../../Assets/me.png';
import Aadarsh from '../../Assets/Aadarsh_Cyan.png'
import HeaderSocials from "./HeaderSocials";
import {FaPrayingHands} from 'react-icons/fa'
import About from "../About/About";
import { useEffect } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'

function Header () {
      useEffect(()=>{
            AOS.init({duration: 2000});
          }, [])

      return<>
            <header>
                  <div className="container header__container animation" data-aos="flip-down">
                              <h3>Namaste! &nbsp; <FaPrayingHands/> &nbsp;&nbsp; I'm </h3>
                              <h1>Aadarshbhushan Singh</h1>
                              <h5 className="text-light">Computer Science Student</h5>
                              <CTA></CTA>
                              <HeaderSocials/>

                              <div className="me" >
                                    <img src={Aadarsh} alt="MY IMAGE HERE" id="my__profile__image"/>
                              </div>

                              <a className="scroll__down" href="#contact">Scroll Down</a>
                  </div>

            </header>
      </>
}

export default Header;