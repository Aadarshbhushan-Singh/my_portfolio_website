import React from 'react'
import './ThemeChanger.css'
import red_profile_pic from '../../Assets/Aadarsh-3.png'

export const ThemeChanger = () => {

      const changeThemeToRed = () => {
            var root = document.querySelector(':root');
            var rootStyles = getComputedStyle(root);
            var color_bg = rootStyles.getPropertyValue('--color-bg');
            var color_bg_variant = rootStyles.getPropertyValue('--color-bg-variant');
            var color_primary = rootStyles.getPropertyValue('--color-primary');
            var color_primary = rootStyles.getPropertyValue('--color-primary-variant');
            var color_white = rootStyles.getPropertyValue('--color-white');
            var color_light = rootStyles.getPropertyValue('--color-light');


            // var color_bg = rootStyles.getPropertyValue('--color-bg');
            // var color_bg_variant = rootStyles.getPropertyValue('--color-bg-variant');
            // var color_primary = rootStyles.getPropertyValue('--color-primary');
            // var color_primary = rootStyles.getPropertyValue('--color-primary-variant');
            // var color_white = rootStyles.getPropertyValue('--color-white');
            // var color_light = rootStyles.getPropertyValue('--color-light');

            const img = document.getElementById('my__profile__image').src = red_profile_pic;
            console.log("Reached image changer")
            // img.src = {red_profile_pic};

            
      }

  return (
      <div className='theme__changer__container'>
                  <div className='cyan__circle'></div>
                  <div className='yellow__circle'></div>
                  <div className='red__circle'onClick={changeThemeToRed}></div>
      </div>
    
  )
}
