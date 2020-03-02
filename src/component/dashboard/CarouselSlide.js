import React from "react";
import c3 from '../../asset/images/c3.jpg'
import c2 from '../../asset/images/c2.jpg'
import c1 from '../../asset/images/c1.jpg'
import Carousel from 'react-bootstrap/Carousel'
function CarouselSlide(props) {
  return (
    <div>
      <Carousel autoPlay interval="1000" >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c1}
            alt="First slide"
          />
          <Carousel.Caption>
          <span className="text-dark">  <h3>First slide label</h3>
            <p>This is the demo of TODO List App</p></span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item width="50%">
          <img
            className="d-block w-100"
            src={c2}
            alt="Third slide"
            
          />
          <Carousel.Caption>
          <span className="text-dark">  <h3>Second slide label</h3>
            <p>Second slide of Todo List</p></span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={c3}
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
          <Carousel.Caption>
                <span className="text-dark">  <h3>Three slide label</h3>
            <p>Third slide of Todo List</p></span>   
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSlide;
