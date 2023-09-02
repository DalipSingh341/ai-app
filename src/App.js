import './App.css';
import './Root.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AiNav from './components/AiNav';
import Circle1 from './components/Circle1';
import Unique2 from './components/Unique2';
import BlockChain3 from './components/BlockChain3';
import Nexai6 from './components/Nexai6';
import Ready8 from './components/Ready8';
import Footer from './components/Footer';
import Nexai5 from './components/Nexai5';
import Token7 from './components/Token7';
import BackToTop from './components/BackToTop';
import MyPreloader from './components/MyPreloader';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
   useEffect(() => {
     AOS.init();
   }, []);
  return (
    <div className='overflow-hidden'>
      <MyPreloader/>
      <BackToTop/>
      <AiNav />
      <Circle1 />
      <Unique2/>
      <BlockChain3/>
      <Nexai5/>
      <Nexai6/>
      <Token7/>
      <Ready8/>
      <Footer/>
    </div>
  );
}

export default App;
