import React, { useRef, useState } from "react";
import './Achievements.css'
import IMG1 from '../../Assets/avatar1.jpg'
import IMG2 from '../../Assets/avatar2.jpg'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { Navigation,EffectCoverflow, Pagination, Scrollbar, A11y } from "swiper";

const achievement_list = [
      {
            id: 1,
            image: IMG1,
            achievement_description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quas, fugit, repudiandae autem consectetur expedita velit nisi, explicabo sunt sequi tempora dicta nostrum vitae delectus eum atque ratione minima ab.",
            achievement_heading: "Achievement heading very very long heading",
            certificate_link: "https://google.com"
      },
      {
            id: 2,
            image: IMG2,
            achievement_description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quas, fugit, repudiandae autem consectetur expedita velit nisi, explicabo sunt sequi tempora dicta nostrum vitae delectus eum atque ratione minima ab.",
            achievement_heading: "Achievement heading very very long heading",
            certificate_link: "https://google.com"
      },
      {
            id: 3,
            image: IMG2,
            achievement_description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quas, fugit, repudiandae autem consectetur expedita velit nisi, explicabo sunt sequi tempora dicta nostrum vitae delectus eum atque ratione minima ab.",
            achievement_heading: "Achievement heading very very long heading",
            certificate_link: "https://google.com"
      },
      {
            id: 4,
            image: IMG2,
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

                  <Swiper className="container achievements__container mySwiper"
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 2,
                      slideShadows: true,
                    }}
                  //   pagination={true}
                    modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  >
                        {
                              achievement_list.map(({id, image, achievement_heading, achievement_description, certificate_link})=>{
                                    return<>      
                                          <SwiperSlide className="achievement">
                                                <img src={image} alt="achievement_image" />
                                                <h3>{achievement_heading}</h3>
                                                <h5>{achievement_description}</h5>
                                                <a href={certificate_link} className="btn" id="certificate-btn" target="_blank">Certificate</a>
                                          </SwiperSlide>
                                    </>
                              })
                        }
                  </Swiper>


            </section>
      </>
}


export default Achievements;