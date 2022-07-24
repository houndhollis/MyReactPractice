import './App.css';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import React,{useState,useEffect} from 'react';
function App() {


  const [scrollY, setScrollY] = useState(0);

const handleScroll = () => {
  const scrollPosition = window.pageYOffset;
  setScrollY(scrollPosition)
};

useEffect( () => {
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, []);
console.log(scrollY)
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2 scrollY={scrollY}/>
      <Section3/>
    </div>
  );
}

export default App;
