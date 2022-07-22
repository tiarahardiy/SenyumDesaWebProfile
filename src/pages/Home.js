import React, {useState,useEffect} from 'react'
import Navbar from '../components/Navbar/indexNavbar'
import HeroSection from '../components/HeroSection/indexHero';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };


  return (
    <>
       <Navbar toggle={toggle}/>
      <HeroSection />
      
    </>
     
    
  )
}

export default Home