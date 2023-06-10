import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
function HeaderSocials () {
      return <>
            <div className="header__socials">
                  <a href="https://www.linkedin.com/in/aadarshbhushan-singh-47648921b/" target="_blank"><BsLinkedin/></a>
                  <a href="https://github.com/Aadarshbhushan-Singh" target="_blank"><BsGithub/></a>
                  <a href="https://twitter.com/i/flow/login"><BsTwitter/></a>
            </div>     
      </>
}

export default HeaderSocials;