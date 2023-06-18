import React from "react";
import './Footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

function Footer (){
      return<>
      <section className="footer">
            <a href="#" className="footer__logo">Aadarshbhushan Singh</a>
            <ul className="permalinks">
                  <li><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#experiences">Experiences</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#achievements">Achievements</a></li>
                  <li><a href="#contacts">Contacts</a></li>
            </ul>

            <div className="footer__socials">
                  <a href="https://github.com" target="_blank"><AiFillGithub className="footer-btn"/></a>
                  <a href="https://linkedin.com" target="_blank"><FaLinkedinIn className="footer-btn"/></a>
                  <a href="https://facebook.com" target="_blank"><BsFacebook className="footer-btn"/></a>
                  <a href="https://instagram.com" target="_blank"><BsInstagram className="footer-btn"/></a>
                  <a href="https://twitter.com" target="_blank"><AiFillTwitterCircle className="footer-btn"/></a>
            </div>

            <div className="footer__copyright">
                  <small>&copy; Aadarshbhushan Singh. All rights reserved.</small>
            </div>
      </section>
      </>
}

export default Footer;