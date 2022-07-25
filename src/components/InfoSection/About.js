import React from 'react'
import {
    AboutContainer, TextAbout, HeadingAbout, TextLearn, TextKetua, TextJabatan
   } from './SectionElements';
import './Section.css'

const About = () => {
  return (
    <div>
        <AboutContainer>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justfy-content-between'>
                        <div className='col-md-7 mt-5'>
                            <HeadingAbout>About Us</HeadingAbout>
                            <TextAbout> NCT Dream adalah sub-unit ketiga dari boy band asal Korea Selatan  Unit ini melakukan debutnya pada 25 Agustus 2016 dengan lagu "Chewing Gum" dan tujuh orang anggota: Mark , Renjun, Jeno, Haechan, Jaemin, Chenle dan Jisung.
                            </TextAbout>
                           <div className='d-flex justify-content-between margin-button'>
                            <button type="button" className="btn btn-lg btn-light"><TextLearn>Learn More</TextLearn></button>
                            <div className='content-text'>
                                    <TextKetua>Abdul Rozak S.H</TextKetua>
                                    <TextJabatan>KETUA YAYASAN SENYUM DESA INDONESIA</TextJabatan>
                            </div>
    
                           </div>
                           
                            
                        </div>
                      
     
                        <div className='col-md-5 content-image'>
                            <img
                                className="d-block w-100 image-about "
                                src={require('../../assets/images/about.png')}
                                alt="Second slide"
                            />
                        </div>
                      
                     
                                    
                       
                 
                    </div>
                </div>
            </div>
        </AboutContainer>
    </div>
  )
}

export default About