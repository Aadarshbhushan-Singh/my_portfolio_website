import React from "react";
import './Experience.css'
import {FaHandPointRight} from 'react-icons/fa'


import { useEffect } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'

function Experience () {
      useEffect(()=>{
            AOS.init({duration: 2000});
          }, [])

      return<>
      <section id="experiences">
            <h5>What skills I have?</h5>
            <h2>My Work Experience</h2>

            <div className="container experience__container" >
                  <div className="experience__bain animation" data-aos="fade-right">
                  <h3>Analyst Intern at <span className="experience__bold__span"> Bain & Company </span> <br /> <span className="date__span">Jan 2023 - Present </span></h3>
                        <article className="experience__details__bain">
                              <ol>
                                    <li>
                                     <FaHandPointRight className="experience__bullet__icon"/> Developed an <span className="experience__bold__span"> Automated Budgeting Tool </span> using <span className="experience__bold__span"> Microsoft Excel and VBA </span> for an MNC which <span className="experience__bold__span"> reduced their budgeting time by 80% </span>
                                    </li>
                                    <br />
                                    <li>
                                    <FaHandPointRight className="experience__bullet__icon"/> Created a <span className="experience__bold__span">data consolidation and cleaning tool using Python (NumPy, Pandas and Tkinter)</span> whose output would be used before feeding files into Alteryx which <span className="experience__bold__span"> reduced workflow time by 20% </span>
                                    </li>
                                    <br />
                                    <li>
                                    <FaHandPointRight className="experience__bullet__icon"/> Making SG&A Spend X-Ray: Unleashing <span className="experience__bold__span"> SG&A spend insights with Tableau </span>, Alteryx, and Excel at a very granular level
                                    </li>
                              </ol>
                              
                        </article>
                  </div>

                  <div className="experience__ambher animation" data-aos="fade-left">
                  <h3>React Developer Intern at <span className="experience__bold__span">Ambher Pvt Ltd</span> <br /> <span className="date__span">Jan 2022 - Mar 2023</span></h3>
                       <article className="experience__details__ambher">
                              <ol>
                                    <li>
                                          <FaHandPointRight className="experience__bullet__icon"/> As a front-end developer intern, my main responsibility was to code website UI using<span className="experience__bold__span"> React and Redux and integrate it with the back-end </span>
                                    </li>
                                    <br />
                                    <li>
                                          <FaHandPointRight className="experience__bullet__icon"/> In addition to this, I also conducted testing and upgrading of previous code to ensure optimal performance
                                    </li>
                                    <br />
                                    <br />
                                    <li>
                                          <FaHandPointRight className="experience__bullet__icon"/> Became familiar with version control systems like Git and gained experience working with cross-functional teams
                                    </li>
                                    {/* <li>
                                          <h4>
                                          <FaHandPointRight className="experience__bullet__icon"/> &nbsp;Tech Stack: <br />    React and Redux, Node Js, Git 
                                          </h4>
                                          <span className="experience__bold__span"></span>
                                    </li> */}
                              </ol>
                       </article>
                  </div>
            </div>
            
      </section>
      </>
}

export default Experience;