import './Project.css';
import Vyadh_Image from '../../Assets/Rover_Vyadh.png'
import Mt_Manaslu_Image from '../../Assets/Mt_Manaslu_Website.png'
import Sunsari_Samudayik_Image from '../../Assets/Sunsari_Samudayik_Hospital_Website.png'
import getUpdated_Image from '../../Assets/Aadarsh-2.png'
import textUtilities_Image from '../../Assets/Aadarsh-2.png'
import easyTerminal_Image from '../../Assets/Aadarsh-2.png'
import React, { useState } from 'react';

import { useEffect } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'



const project_list = [
      {
            id: 1,
            image: Vyadh_Image,
            project_title: "Communication Module for Rover Vyadh",
            project_description: "Guided a team of 3 members as GCS(Ground Communication System) head of Team Vyadh and made a web-based interface for rover and base station communication, offering control of sensors, motors, robotic arm, and live camera feedback. Our rover blasted off to the top 10 in Asia at  International Rover Design Challenge. Engaging in the project provided me with valuable insights into leadership skills and effective project management techniques.",
            tech_used: "HTML, CSS, NodeJs, Plotty Js,",
            project_link: "https://github.com/Aadarshbhushan-Singh/vyadh_communication/tree/main",
      },
      
      {
            id: 2,
            image: Sunsari_Samudayik_Image,
            project_title: "Website for a Hospital as a Freelancer",
            project_description: "As I immersed into web development, I ventured into freelancing and took on a hospital website project. Collaborating closely with the client, we brainstormed ideas and crafted a wonderful website, having featuers like: a user-friendly interface, a detailed information section about medical services and specialties offered etc. It was an invaluable experience that enhanced my skills in client communication and web development.",
            tech_used: "HTML, CSS, JS, SEO, Web Hosting",
            project_link: "https://www.sunsaricommunityhospital.com.np/",
      },
      {
            id: 3,
            image: Mt_Manaslu_Image,
            project_title: "Website for a School as a Freelancer",
            project_description: "I again explored freelancing opportunities and had the chance to create a comprehensive website for a school. Working closely with the client, we developed a website whose features included a user-friendly interface, easy navigation for parents, students, and faculty, a gallery to showcase memorable moments, and a contact page for inquiries and communication. The result was a dynamic and informative website that effectively represented the school's mission and vision.",
            tech_used: "HTML, CSS, JS, SEO, Web Hosting",
            project_link: "https://mtmanasluschool.edu.np/",
      },
      {     
            id: 4,
            image: getUpdated_Image,
            project_title: "GetUpdated - Your Go-To News Platform",
            project_description: "GetUpdated is a news platform powered by React which brings you daily news at your fingertips. From breaking news to entertainment, sports to technology, this platform has all important news in a categorized way. The seamless fetching of news is done using Newsapi. I created this webapp when I was getting hands-on experience on using APIs. ",
            tech_used: "Java, OOPS Concepts, File Handling Methods",
            project_link: "https://github.com/Aadarshbhushan-Singh/easy_terminal_OS_project",
      },
      {     
            id: 5,
            image: textUtilities_Image,
            project_title: "Text Utilities - More than a paraphraser",
            project_description: "Taught myself Java & OOPs and created Easy Terminal — A userfriendly software for executing basic commands and compiling C/C++ programs with ease. Designed with beginner-friendly commands resembling simple English, it provides an intuitive learning experience for beginners.",
            tech_used: "Java, OOPS Concepts, File Handling Methods",
            project_link: "https://github.com/Aadarshbhushan-Singh/easy_terminal_OS_project",
      },
      {     
            id: 6,
            image: easyTerminal_Image,
            project_title: "Building Terminal from Scratch",
            project_description: "Taught myself Java & OOPs and created Easy Terminal — A userfriendly software for executing basic commands and compiling C/C++ programs with ease. Designed with beginner-friendly commands resembling simple English, it provides an intuitive learning experience for beginners.",
            tech_used: "Java, OOPS Concepts, File Handling Methods",
            project_link: "https://github.com/Aadarshbhushan-Singh/easy_terminal_OS_project",
      }
];

function Projects(){
      useEffect(()=>{
            AOS.init({duration: 2000});
          }, [])
      return<>
            <section id="projects">
                  <h5>What works have I done?</h5>
                  <h2>Projects</h2>

                  <div className="container projects__container animation" data-aos="flip-down">
                        {
                              project_list.map(({id, image, project_title, project_description, tech_used, project_link, })=>{
                                    return<>
                                          <article className="project">
                                                <div className="project_item-image">
                                                      <img src={image} alt="Image 1 here" />
                                                </div>
                                                <h3>{project_title}</h3>

                                                <h5>{project_description}</h5>
                                                <br />
                                                <h5> <span className="tech_used">Concepts Used: </span>{tech_used}</h5>
                                                <br />
                                                <div className="project-cta">
                                                      <a href={project_link} className="btn" target="_blank">View Project</a>
                                                </div>
                                          </article>
                                    </>
                              })
                        }                        
                  </div>
            </section>
      </>
}

export default Projects;