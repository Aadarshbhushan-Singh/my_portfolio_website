import './App.css';
import { useEffect, useState } from 'react';

//Imorting all the components
import About from './Components/About/About';
import Contact from './Components/Contacts/Contact'
import Experience from './Components/Experiences/Experiences';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Achievements from './Components/Achievements/Achievements'
import Projects from './Components/Projects/Projects';
import Nav from './Components/Nav/Nav'
import Education from './Components/Education/Education';
import { ThemeChanger } from './Components/ThemeChanger/ThemeChanger';

function App() {
  const changeTheme = () => {
      var root = document.querySelector(':root');
      var rootStyles = getComputedStyle(root);
      var color_bg = rootStyles.getPropertyValue('--color-bg');
      var color_bg_variant = rootStyles.getPropertyValue('--color-bg-variant');
      var color_primary = rootStyles.getPropertyValue('--color-primary');
      var color_primary = rootStyles.getPropertyValue('--color-primary-variant');
      var color_white = rootStyles.getPropertyValue('--color-white');
      var color_light = rootStyles.getPropertyValue('--color-light');

      console.log(color_white);
  }

  useEffect(() => {
    changeTheme();
  }, []);

  return (
    <>  
        <ThemeChanger/>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Projects/>
        <Education/>
        <Achievements/>
        <Contact/>
        <Footer/>
        
    </>
    
  );
}

export default App;
