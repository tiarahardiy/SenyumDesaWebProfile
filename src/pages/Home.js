import React, {useState,useEffect} from 'react'
import Navbar from '../components/Navbar/indexNavbar'
import HeroSection from '../components/HeroSection/indexHero';
import Banner from '../components/InfoSection/Banner';
import Galeri from '../components/InfoSection/Galeri';
import About from '../components/InfoSection/About';
import Info from '../components/InfoSection/Info';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };


  return (
    <>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <Banner></Banner>
      <Galeri></Galeri>
      <About></About>
      <Info></Info>
      
    </>
     
    
  )
}

export default Home