import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "react-bootstrap";

import Zero from "../../../images/mobile-about/gallery/0.jpg";
import One from "../../../images/mobile-about/gallery/1.jpg";
import Two from "../../../images/mobile-about/gallery/2.jpg";
import Three from "../../../images/mobile-about/gallery/3.jpg";
import Four from "../../../images/mobile-about/gallery/4.jpg";
import Five from "../../../images/mobile-about/gallery/5.jpg";
import Six from "../../../images/mobile-about/gallery/6.jpg";
import Seven from "../../../images/mobile-about/gallery/7.jpg";
import Eight from "../../../images/mobile-about/gallery/8.jpg";
import Nine from "../../../images/mobile-about/gallery/9.jpg";

const GalleryAbout = () => {

  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={true}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      animationHandler="fade"
      transitionTime="500"
      interval={2000}
      swiping={false}
      swipeMovementStarted={false}
    >
      <div><Image src={Zero}/></div>
      <div><Image src={One}/></div>
      <div><Image src={Two}/></div>
      <div><Image src={Three}/></div>
      <div><Image src={Four}/></div>
      <div><Image src={Five}/></div>
      <div><Image src={Six}/></div>
      <div><Image src={Seven}/></div>
      <div><Image src={Eight}/></div>
      <div><Image src={Nine}/></div>
    </Carousel>
  );
};
export default GalleryAbout;
