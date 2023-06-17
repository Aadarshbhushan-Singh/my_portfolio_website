import React from "react";
import './Achievements.css'
import {FaAward} from 'react-icons/fa'


const achievement_list = [
      {
            id: 1,
            icon: {FaAward},
            achievement_description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quas, fugit, repudiandae autem consectetur expedita velit nisi, explicabo sunt sequi tempora dicta nostrum vitae delectus eum atque ratione minima ab.",
            achievement_heading: "Achievement heading very very long heading",
            certificate_link: "https://google.com"
      },
      {
            id: 2,
            icon: "FaAward",
            achievement_description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quas, fugit, repudiandae autem consectetur expedita velit nisi, explicabo sunt sequi tempora dicta nostrum vitae delectus eum atque ratione minima ab.",
            achievement_heading: "Achievement heading very very long heading",
            certificate_link: "https://google.com"
      }
]

function Achievements(){
      return<>
            <section id="achievements">
                  <h5>Here are my notable accomplishments, and I'm always working towards attaining more.</h5>
                  <h2>Achievements</h2>

                  <div className="container achievements__container">
                        {
                              achievement_list.map(({id, icon, achievement_heading, achievement_description, certificate_link})=>{
                                    return<>      
                                          <div className="achievement">
                                                <{icon}/>
                                                <h3>{achievement_heading}</h3>
                                                <h5>{achievement_description}</h5>
                                                <a href={certificate_link} className="btn" id="certificate-btn" target="_blank">Certificate</a>
                                          </div>
                                    </>
                              })
                        }

                        
                  </div>


            </section>
      </>
}


export default Achievements;