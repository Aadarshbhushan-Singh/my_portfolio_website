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

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  }, [])

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
