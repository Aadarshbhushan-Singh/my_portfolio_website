import React from "react";
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsPersonWorkspace} from 'react-icons/bs'
import {BiBookAdd} from 'react-icons/bi'
import {TbSchool} from 'react-icons/tb'
import {FaAward} from 'react-icons/fa'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from "react";

function Nav() {
      const [activeNav, setActiveNav] = useState('#');

      return<>
            <nav>
                  <div className="long-nav">
                        <a href="#" onClick={()=>{setActiveNav('#')}}className={activeNav === '#' ? 'active':''}><AiOutlineHome id="nav-icon"/> Home</a>
                        <a href="#about" onClick={()=>{setActiveNav('about')}} className={activeNav==='about'?'active':''}><BiUser id="nav-icon"/> About</a>
                        <a href="#experiences" onClick={()=>{setActiveNav('experiences')}} className={activeNav === 'experiences' ? 'active':''}><BsPersonWorkspace id="nav-icon"/>Experiences</a>
                        <a href="#projects" onClick={()=>{setActiveNav('projects')}} className={activeNav === 'projects' ? 'active':''} ><BiBookAdd id="nav-icon"/>Projects</a>
                        <a href="#education" onClick={()=>{setActiveNav('education')}} className={activeNav === 'education' ? 'active' : ''}><TbSchool id="nav-icon"/>Education</a>
                        <a href="#portfolio" onClick={()=>{setActiveNav('portfolio')}} className={activeNav === 'portfolio'?'active':''}><FaAward id="nav-icon"/>Portfolio</a>
                        <a href="#contacts" onClick={()=>{setActiveNav('contacts')}} className={activeNav === 'contacts'?'active':''}><AiOutlineContacts id="nav-icon"/>Contacts</a>
                  </div>

                  <div className="short-nav">
                        <a href="#" onClick={()=>{setActiveNav('#')}}className={activeNav === '#' ? 'active':''}><AiOutlineHome id="nav-icon"/> </a>
                        <a href="#about" onClick={()=>{setActiveNav('about')}} className={activeNav==='about'?'active':''}><BiUser id="nav-icon"/> </a>
                        <a href="#experiences" onClick={()=>{setActiveNav('experiences')}} className={activeNav === 'experiences' ? 'active':''}><BsPersonWorkspace      id="nav-icon"/></a>
                        <a href="#projects" onClick={()=>{setActiveNav('projects')}} className={activeNav === 'projects' ? 'active':''} ><BiBookAdd id="nav-icon"/></a>
                        <a href="#education" onClick={()=>{setActiveNav('education')}} className={activeNav === 'education' ? 'active' : ''}><TbSchool id="nav-icon"/></a>
                        <a href="#portfolio" onClick={()=>{setActiveNav('portfolio')}} className={activeNav === 'portfolio'?'active':''}><FaAward id="nav-icon"/></a>
                        <a href="#contacts" onClick={()=>{setActiveNav('contacts')}} className={activeNav === 'contacts'?'active':''}><AiOutlineContacts id="nav-icon"/></a>
                  </div>
            </nav>
      </>

}

export default Nav;