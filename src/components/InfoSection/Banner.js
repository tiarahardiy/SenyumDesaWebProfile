import React from 'react'
import {
 BannerContainer, TextBanner
} from './SectionElements';
import './Section.css'

const Banner = () => {
  return (
    <div>
      <BannerContainer>
        <div className='container'>
          <div className='row'>
            <div className='d-flex justify-content-between'>
              <div>
                <TextBanner>Bantu kami menebarkan senyuman ke seluruh indonesia.</TextBanner>
                <button type="button" className="btn btn-lg  btn-light"><span className='btn-donasi'>DONASI</span></button>
              </div>
              <img
                className="d-block w-100 ms-3"
                src={require('../../assets/images/donasi.png')}
                alt="First slide"
                />
              
            </div>
          </div>
        </div>

      </BannerContainer>

    </div>
  )
}

export default Banner