import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SlideOne from "./SlideOne"; //Sharon Intro
import SlideTwo from "./SlideTwo";  //Gods Gospel cafe
import SlideThree from "./SlideThree"; //Coming soon
import SlideFour from "./SlideFour"; //Foreign language
import SlideFive from "./SlideFive"; //Give/sow 
import SlideSix from "./SlideSix"; //Request prayer


const Gallery = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      showDots={false}
      responsive={responsive}
      infinite={true}
      autoPlay="true"
      autoPlaySpeed={6000}
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
      showIndicators={false}
      animationHandler="fade"
    >
      <div><SlideOne/></div> 
      <div><SlideTwo/></div>
      <div><SlideThree/></div>
      <div><SlideFour/></div>
      <div><SlideFive/></div>
      <div><SlideSix/></div> 
    </Carousel>

  );
};
export default Gallery;
