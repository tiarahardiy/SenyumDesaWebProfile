import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {
   Heading, BoxCard, Desc, ContainerCarousel
} from './HeroElements';

const HeroSection= () => {
   
  return (
    <div>
        <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../../assets/images/image_hero.png')}
                alt="First slide"
                />
                <Carousel.Caption>
                   
                    <ContainerCarousel>
                        <div className='p-2 '>
                            <BoxCard>
                                <Heading>BONUS DARI PENGABDIAN ADALAH PERSAUDARAAN </Heading>
                            </BoxCard>

                            <Desc>KEGIATAN DIESNATALIS 4 SENYUM DESA INDONESIA</Desc>
                        </div>
                    </ContainerCarousel>
                  
                        
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../../assets/images/image_hero.png')}
                alt="Second slide"
                />

                <Carousel.Caption>
              
                <ContainerCarousel>
                        <div className='p-2 '>
                            <BoxCard>
                                <Heading>MARI BERBAGI DENGAN SESAMA </Heading>
                            </BoxCard>

                            <Desc>KEGIATAN DIESNATALIS 4 SENYUM DESA INDONESIA</Desc>
                        </div>
                    </ContainerCarousel>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../../assets/images/image_hero.png')}
                alt="Third slide"
                />
                <Carousel.Caption>
                    <ContainerCarousel>
                        <div className='p-2 '>
                            <BoxCard>
                                <Heading>KITA ADALAH MAKHLUK SOSIAL </Heading>
                            </BoxCard>

                            <Desc>KEGIATAN DIESNATALIS 4 SENYUM DESA INDONESIA</Desc>
                        </div>
                    </ContainerCarousel>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>
  )
}

export default HeroSection