import React from "react";
import './About.css'
import ME from '../../Assets/Aadarsh-2.png'
import {BsPersonWorkspace} from 'react-icons/bs'
import {BiBookAdd} from 'react-icons/bi'
import {FaAward} from 'react-icons/fa'
function About () {
      return <>
            <section id="about">
                  <h5>Get To Know</h5>
                  <h2>ABOUT ME</h2>
                  <div className="container about__container">
                        
                        <div className="about__content">
                               <p>
                               A skilled and dedicated computer enthusiast with prior experience in  <b className="bold__letters">Web Development</b> and <b className="bold__letters">Data Analysis</b>; proficient in <b className="bold__letters">Java</b>; ready to drive success in goal-oriented companies and become an asset.
                              </p>
                              <div className="about__cards">
                                    <a href="#experiences">
                                    <article className="about__card">
                                          <BsPersonWorkspace className="about__icon"/>
                                          <h5>Experience</h5>
                                                <small> Jan 23 - Present -- Analyst Intern -- Bain & Company</small>
                                                <br />
                                                <small>Jan 22 - Mar 22 -- React Developer -- Ambher Pvt Ltd</small>
                                    </article>
                                    </a>
                                    <a href="#projects">
                                    <article className="about__card">
                                          <BiBookAdd className="about__icon"/>
                                          <h5>Projects</h5>
                                          <small>Proven expertise through numerous successful projects</small>
                                    </article>
                                    </a>
                                    <a href="#portfolio">
                                    <article className="about__card">
                                          <FaAward className="about__icon"/>
                                          <h5>Achievements</h5>
                                          <small>URC Finalist | Top 10 in Asia at IRDC</small>
                                          <br />
                                          <small>Special Achiever - VIT22</small>
                                    </article>
                                    </a>
                              </div>

                              

                              <a href="#contact" className="btn btn-primary">Let's Talk</a>
                        </div>
                  </div>
            </section>
      
      </>
}

export default About;