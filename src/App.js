import './App.css';

//Imorting all the components
import About from './Components/About/About';
import Contact from './Components/Contacts/Contact'
import Experience from './Components/Experiences/Experiences';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Portfolio from './Components/Portfolio/Portfolio'
import Projects from './Components/Projects/Projects';
import Nav from './Components/Nav/Nav'
import Education from './Components/Education/Education';

function App() {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Projects/>
        <Education/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        
    </>
    
  );
}

export default App;
