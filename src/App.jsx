import { } from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';

import Skills from './components/Skills';

import Projects from './components/Projects';
//import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
 
  return (
    <div className="App">
    <Navbar/>
    <Header />
    <About />
    <Contact />
    
    <Skills />
    <Projects />
   {/*<Experience />
   
   */} 
        
    <Footer />
  </div>
);

}

export default App
