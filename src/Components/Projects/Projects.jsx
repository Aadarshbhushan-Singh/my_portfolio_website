import React from "react";
import './Project.css';
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'

import { useEffect } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'


const project_list = [
      {
            id: 1,
            image: IMG1,
            project_title: "Project title 1 very very long title",
            project_description: "Project Description here Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam, doloremque ullam magnam alias atque. Suscipit quia perferendis delectus officia ipsum, nihil dolorem, expedita error quasi fugit sunt obcaecati temporibus? <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus itaque in fugit reprehenderit saepe. Maiores atque accusantium qui, animi libero voluptatem reiciendis tempore! Eius modi hic ducimus obcaecati deleniti.",
            github_link: "https://github.com",
            read_more_link: "https://google.com"
      },
      {     
            id: 2,
            image: IMG2,
            project_title: "Project title 2 very very long title",
            project_description: "Project Description here Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam, doloremque ullam magnam alias atque. Suscipit quia perferendis delectus officia ipsum, nihil dolorem, expedita error quasi fugit sunt obcaecati temporibus? <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus itaque in fugit reprehenderit saepe. Maiores atque accusantium qui, animi libero voluptatem reiciendis tempore! Eius modi hic ducimus obcaecati deleniti.",
            github_link: "https://github.com",
            read_more_link: "https://google.com"
      },
      {
            id: 3,
            image: IMG3,
            project_title: "Project title 3 very very long title",
            project_description: "Project Description here Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam, doloremque ullam magnam alias atque. Suscipit quia perferendis delectus officia ipsum, nihil dolorem, expedita error quasi fugit sunt obcaecati temporibus? <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam temporibus itaque in fugit reprehenderit saepe. Maiores atque accusantium qui, animi libero voluptatem reiciendis tempore! Eius modi hic ducimus obcaecati deleniti.",
            github_link: "https://github.com",
            read_more_link: "https://google.com"
      },
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
                              project_list.map(({id, image, project_title, project_description, github_link, read_more_link})=>{
                                    return<>
                                          <article className="project">
                                                <div className="project_item-image">
                                                      <img src={image} alt="Image 1 here" />
                                                </div>
                                                <h3>{project_title}</h3>

                                                <h5>{project_description}</h5>
                                                <div className="project-cta">
                                                      <a href={github_link} className="btn" target="_blank">Github</a>
                                                      <a href={read_more_link} className="btn btn-primary" target="_blank" >Read more</a>
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