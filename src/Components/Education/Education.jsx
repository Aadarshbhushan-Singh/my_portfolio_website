import React from "react";
import './Education.css'
import {FaReact} from 'react-icons/fa'
import {DiMysql} from 'react-icons/di'
import {FaHandPointRight} from 'react-icons/fa'

function Education (){
      return<>
            <section className='container education__skills__container' id="education">
                  <div className="about__me__container">
                        <h2>Know Me</h2>
                        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta quasi, modi omnis veritatis quo, voluptatem saepe eveniet sed ad nostrum maxime, placeat officia explicabo sit quod eum laborum dolores itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique inventore, odio delectus deleniti, commodi fugiat vero saepe doloribus impedit omnis, laudantium iure optio nemo! Aliquid accusantium veniam tempore ipsa.</h5>
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
                                    <li><FaHandPointRight className="edu__bullet__icon"/>COMPEX Scholarship - Full schlorship offered by Indian Embassy</li>
                                    <li><FaHandPointRight className="edu__bullet__icon"/>Special Achiever - VIT21</li>
                                    <li><FaHandPointRight className="edu__bullet__icon"/>Achiever - VIT21</li>
                                    <li><FaHandPointRight className="edu__bullet__icon"/>Merit Scholarship VIT21,22,23</li>
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