import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
    TextGaleri, TextButton
 } from './SectionElements';
 

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
};

const items = [
    <div className="item  me-4" data-value="1">  
        <img
        className="d-block w-100"
        src={require('../../assets/images/2.png')}
        alt="Second slide"
        />
    </div>,
    <div className="item me-4" data-value="2">
          <img
                className="d-block w-100"
                src={require('../../assets/images/2.png')}
                alt="Second slide"
                />
    </div>,
    <div className="item  me-4" data-value="3">
          <img
                className="d-block w-100"
                src={require('../../assets/images/4.png')}
                alt="Second slide"
                />
    </div>,
    <div className="item  me-4" data-value="4">
          <img
                className="d-block w-100"
                src={require('../../assets/images/7.png')}
                alt="Second slide"
                />
    </div>,
    <div className="item me-4" data-value="5">
          <img
                className="d-block w-100"
                src={require('../../assets/images/2.png')}
                alt="Second slide"
                />
    </div>,
    <div className="item me-4" data-value="5">
        <img
              className="d-block w-100"
              src={require('../../assets/images/10.png')}
              alt="Second slide"
              />
  </div>,
     <div className="item me-4" data-value="5">
     <img
           className="d-block w-100"
           src={require('../../assets/images/15.png')}
           alt="Second slide"
           />
</div>,
];

const Galeri = () => {
  return (
    <div>
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center'>
                <TextGaleri>GALERI KEGIATAN</TextGaleri>
            </div>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                autoPlay={true}
                autoPlayInterval={5000}
                renderPrevButton={() => {
                    return  <button type="button" className="btn btn-primary"><TextButton>PREVIOUS</TextButton></button>
                   
                  }}
                renderNextButton={() => {
                    return <button type="button" className="btn btn-primary me-5"><TextButton>NEXT</TextButton></button>
                  }}
            />
        </div>



    </div>
  )
}

export default Galeri