import React from "react";
import './Education.css'
import {FaReact} from 'react-icons/fa'
import {DiMysql} from 'react-icons/di'
import {FaHandPointRight} from 'react-icons/fa'

import { useEffect } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'

function Education (){
      useEffect(()=>{
            AOS.init({duration: 2000});
          }, [])


      return<>
            <section className="container education__skills__container animation" id="education" data-aos="flip-right">
                  <div className="about__me__container">
                        <h2>Know Me</h2>
                        <h5>
                        As a computer engineering graduate, I thrive in the world of technology. With expertise in web development, I have crafted impressive websites for satisfied clients. My journey includes a valuable internship as a React developer, where I honed my skills in this cutting-edge JavaScript library. Currently, I'm embarking on an exciting internship as a data analyst at one of the world's biggest consulting firms: Bain & Company. Equipped with a passion for leveraging technology, I am dedicated to unraveling complex problems and continuously expanding my skill set in the ever-evolving realm of computer engineering.  <br /> <br />Let's connect and together we can build something very exiciting!</h5>
                        {/* <h3>Hobbies</h3>
                        <h5>Hobby 1</h5>
                        <h5>Hobby 2</h5>
                        <h5>Hobby 3</h5>
                        <h3>Languages</h3>
                        <h5>English, Hindi, Nepali</h5> */}
                  </div>


                  <div className="eduskill__container">
                        <h2>Education</h2>
                        <div className='edu__container'>
                              <h3>Vellore Institute Of Technology, Vellore, Tamilnadu, India</h3>
                              <h4>B-Tech in Computer Science & Engineering</h4>
                              <ul>  
                                    <li><FaHandPointRight className="edu__bullet__icon"/>CGPA: 8.91/10</li>
                                    <li><FaHandPointRight className="edu__bullet__icon"/>COMPEX Scholarship 2019-2023 - Full schlorship offered by Indian Embassy</li>
                                    <li><FaHandPointRight className="edu__bullet__icon"/>Special Achiever - VIT21-22</li>
                                    <li><FaHandPointRight className="edu__bullet__icon"/>Achiever - VIT21-22</li>
                                    <li><FaHandPointRight className="edu__bullet__icon"/>Merit Scholarship VIT20-21, 21-22, 22-23</li>
                              </ul>
                        </div>
                        <div className='skills__container'>
                              <h3>Skills</h3>
                              <div className="skills">
                                    <div className="skill-item">
                                           <h5> <FaReact/> React</h5>
                                    </div>
                                    <div className="skill-item">
                                           <h5> <DiMysql/> MySQL</h5>
                                    </div>
                                    <div className="skill-item">
                                           <h5> <FaReact/> React</h5>
                                    </div>
                                    <div className="skill-item">
                                           <h5> <FaReact/> React</h5>
                                    </div>
                                    <div className="skill-item">
                                           <h5> <FaReact/> React</h5>
                                    </div>
                                    <div className="skill-item">
                                           <h5> <FaReact/> React</h5>
                                    </div>
                                    <div className="skill-item">
                                           <h5> <FaReact/> React</h5>
                                    </div>
                                    <div className="skill-item">
                                           <h5> <FaReact/> React</h5>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      </>

}

export default Education;