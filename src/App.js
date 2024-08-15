import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     <SocialLinks/>
     <About/>
     <Portfolio/>
     <TechnicalSkills/>
     <Contact/>
    </div>
  );
}

export default App;
