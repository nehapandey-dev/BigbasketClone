import React from 'react'
import {Carousel} from "react-bootstrap"


function HeroSection() {
    return (
        <Carousel variant="dark" >
          <Carousel.Item interval={1000} className='Hero-Img'>
            <img
              className="img "
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_wedding-brida_EP_1600x460px-020122.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 style={{color:'purple'}}>Wedding 💖</h1>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={900} className='Hero-Img'>
            <img
              className="img "
              src="https://www.bigbasket.com/media/uploads/banner_images/hp-m-gm_EPbanner_460px-020122.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3 style={{color:'purple'}}>Home & Kitchen</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={800} className='Hero-Img'>
            <img
              className="img "
              src="https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_020122_Bangalore.jpg"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={700} className='Hero-Img'>
            <img
              className="img "
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_cmc_breakfast_460px-020122.jpg"
              alt="fourth slide"
            />
    
            <Carousel.Caption>
              
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export default HeroSection
