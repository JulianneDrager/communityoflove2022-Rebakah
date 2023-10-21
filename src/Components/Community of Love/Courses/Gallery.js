import React from "react";
import Spanish from "./Languages/Spanish";
import Swahili from "./Languages/Swahili";
import Italy from "./Languages/Italy";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      breakpoint: { max: 900, min: 768 },
      items: 1,
    },
    tabletSM: {
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
      autoPlaySpeed={2500}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={50}
    >
      <div><Spanish/></div>
      <div><Swahili/></div>
      <div><Italy/></div>
    </Carousel>
  );
};
export default Gallery;
