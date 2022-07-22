import React, {useState, useEffect} from 'react';
import { NavbarBrand } from 'react-bootstrap';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavLinksContact,
    Img,
    ImgWrap,
    TextLogo,
} from './NavbarElements';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
          setScrollNav(true)
        } else {
          setScrollNav(false)
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', changeNav)
      }, []);
    
      const toggleHome = () => {
        scroll.scrollToTop();
      };
    

  return (
  <>
   <IconContext.Provider value={{ color: 'black'}}>
    <div className='container-fluid'>
    <Nav scrollNav={scrollNav} >
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}> 
        <ImgWrap>
          <Img src={require('../../assets/images/logo_sd.png')} />
        </ImgWrap>
        </NavLogo>
        <TextLogo>SENYUM DESA INDONESIA</TextLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks 
              to="home" 
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
            
            >Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="route"
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
              >
                About us</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="product"
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
              >Project</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks 
              to="forecasting"
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
              >Donasi</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinksContact 
              to="geotagging"
              smooth={true} 
              duration={500} 
              spy={true}
              exact='true' 
              offset={-80}
              >Contact Us</NavLinksContact>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
    </div>
  
    </IconContext.Provider>
  
  </>

  )
}

export default Navbar
