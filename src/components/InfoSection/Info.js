import React from 'react'
import {
    TextAbdi, TextDesc
   } from './SectionElements';
import './Section.css'

const Info = () => {
  return (
    <div>
        <div >
    
                <div className='d-flex '>
                   
                        <img
                            className="d-block img-fluid "
                            src={require('../../assets/images/projek2.png')}
                            alt="First slide"
                   />
                    
                        <img
                            className=" img-detail"
                            src={require('../../assets/images/projek1.png')}
                            alt="First slide"
                
                       />
                  
                   
              
               
                </div>
            </div>
        </div>
  
  )
}

export default Info