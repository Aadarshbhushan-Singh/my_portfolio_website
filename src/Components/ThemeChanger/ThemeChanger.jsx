import React from 'react'
import './ThemeChanger.css'
import red_profile_pic from '../../Assets/Aadarsh_Red.png'
import cyan_profile_pic from '../../Assets/Aadarsh_Cyan.png'
import yellow_profile_pic from '../../Assets/Aadarsh_Yellow.png'

export const ThemeChanger = () => {

      const changeThemeToYellow = () => {
            var root = document.querySelector(':root');
            var rootStyles = getComputedStyle(root);
            // var color_bg = rootStyles.getPropertyValue('--color-bg');
            // var color_bg_variant = rootStyles.getPropertyValue('--color-bg-variant');
            // var color_primary = rootStyles.getPropertyValue('--color-primary');
            // var color_primary = rootStyles.getPropertyValue('--color-primary-variant');
            // var color_white = rootStyles.getPropertyValue('--color-white');
            // var color_light = rootStyles.getPropertyValue('--color-light');

            root.style.setProperty('--color-bg', '#585c2d');
            root.style.setProperty('--color-bg-variant', '#5c5901');
            root.style.setProperty('--color-primary', '#fbff23');
            root.style.setProperty('--color-primary-variant', 'rgba(253, 232, 7, 0.4)');
            root.style.setProperty('--color-white-light', 'rgba(245, 255, 155, 0.6)');

            const img = document.getElementById('my__profile__image').src = yellow_profile_pic;

            
      }

      const changeThemeToCyan = () => {
            var root = document.querySelector(':root');
            var rootStyles = getComputedStyle(root);
            root.style.setProperty('--color-bg', '#1f1f38');
            root.style.setProperty('--color-bg-variant', '#2c2c6c');
            root.style.setProperty('--color-primary', '#4db5ff');
            root.style.setProperty('--color-primary-variant', 'rgba(77,181,255,0.4)');
            root.style.setProperty('--color-white-light', 'rgba(255,255,255,0.6)');
            const img = document.getElementById('my__profile__image').src = cyan_profile_pic;
      }


      const changeThemeToRed = () => {
            var root = document.querySelector(':root');
            var rootStyles = getComputedStyle(root);
            root.style.setProperty('--color-bg', '#462323');
            root.style.setProperty('--color-bg-variant', '#5a0f0f');
            root.style.setProperty('--color-primary', '#ff7878');
            root.style.setProperty('--color-primary-variant', 'rgba(253, 7, 7, 0.4)');
            root.style.setProperty('--color-white-light', 'rgba(255, 198, 198, 0.6)');
            const img = document.getElementById('my__profile__image').src = red_profile_pic;
      }

  return (
      <div className='theme__changer__container'>
                  <div className='cyan__circle' onClick = {changeThemeToCyan}></div>
                  <div className='yellow__circle' onClick={changeThemeToYellow}></div>
                  <div className='red__circle' onClick = {changeThemeToRed}></div>
      </div>
    
  )
}
