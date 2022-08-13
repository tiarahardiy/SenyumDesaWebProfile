import React, {useState,useEffect} from 'react'
import Navbar from '../components/Navbar/indexNavbar'
import HeroSection from '../components/HeroSection/indexHero';
import Banner from '../components/InfoSection/Banner';
import Galeri from '../components/InfoSection/Galeri';
import About from '../components/InfoSection/About';
import Info from '../components/InfoSection/Info';
import Project from '../components/InfoSection/Project';
import Form from '../components/InfoSection/Form'
import Contact from '../components/InfoSection/Contact'
import ContactInfo from '../components/InfoSection/ContactInfo';
import Footer from '../components/InfoSection/Footer'

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
      {/* <Project></Project> */}
      <Form></Form>
      <Contact></Contact>
      <ContactInfo></ContactInfo>
      <Footer></Footer>
      
    </>
     
    
  )
}

export default Home