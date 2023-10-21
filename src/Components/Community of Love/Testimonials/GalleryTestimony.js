import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import TestimonyStyle from "../Testimonials/css/TestimonayStyle.module.css";
import { Button } from "react-bootstrap";

const GalleryTestimony = () => {
  const pStyle = TestimonyStyle.pStyle;
  const btn = TestimonyStyle.btn;

  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      animationHandler="slide"
      transitionTime="500"
      interval={5000}
    >
      <div>
        <p className={pStyle}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <Button href="/tmp/communityoflove2022.com/readmore" className={btn}>
          READ MORE
        </Button>
      </div>

      <div>
        <p className={pStyle}>Ut enim ad</p>
        <Button href="/tmp/communityoflove2022.com/readmore" className={btn}>
          READ MORE
        </Button>
      </div>

      <div>
        <p className={pStyle}>Ut enim ad minim veniam</p>
        <Button href="/tmp/communityoflove2022.com/readmore" className={btn}>
          READ MORE
        </Button>
      </div>
    </Carousel>
  );
};
export default GalleryTestimony;
