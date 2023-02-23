import React from 'react'
import {Carousel} from "react-bootstrap"

function Bottomsection() {
  return (
    <Carousel variant="dark" >
          <Carousel.Item interval={1000} className='Hero-Img'>
            <img
              className="d-block "
              src="/section-7images/bakery.webp"
              alt="First slide"
            />
           
          </Carousel.Item>
          <Carousel.Item interval={900}>
            <img
              className="d-block "
              src="/section-7images/pampers.webp"
              alt="Second slide"
            />
    
            
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block "
              src="/section-7images/paws.webp"
              alt="Third slide"
            />
    
           
          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img
              className="e-block "
              src="/section-7images/protien shakes.webp"
              alt="fourth slide"
            />
    
            <Carousel.Caption>
              
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
  
}

export default Bottomsection