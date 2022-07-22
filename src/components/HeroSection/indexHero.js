import React from 'react'
import {  Card } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import {
   Heading, BoxCard
} from './HeroElements';

const HeroSection= () => {
   
  return (
    <div>
        <Carousel >
            <Carousel.Item>
                <img
                className="d-block img-fluid"
                src={require('../../assets/images/image_hero.png')}
                alt="First slide"
                />
                <Carousel.Caption>
                    <BoxCard>
                        <Heading>BONUS DARI PENGABDIAN ADALAH PERSAUDARAAN </Heading>
                    </BoxCard>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img-fluid"
                src={require('../../assets/images/dream.jpg')}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../../assets/images/dream.jpg')}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>
  )
}

export default HeroSection