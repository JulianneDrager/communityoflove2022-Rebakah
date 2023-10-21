import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import faithStyle from "./css/FaithStyle.module.css";
import Zero from "../../../ggcf-images/gallery/0.jpg";
import One from "../../../ggcf-images/gallery/1.jpg";
import Two from "../../../ggcf-images/gallery/2.jpg";
import Three from "../../../ggcf-images/gallery/3.jpg";
import Four from "../../../ggcf-images/gallery/4.jpg";
import Five from "../../../ggcf-images/gallery/5.jpg";
import Six from "../../../ggcf-images/gallery/6.jpg";
import Seven from "../../../ggcf-images/gallery/7.jpg";
import Eight from "../../../ggcf-images/gallery/8.jpg";
import Nine from "../../../ggcf-images/gallery/9.jpg";
import Ten from "../../../ggcf-images/gallery/10.jpg";
import Eleven from "../../../ggcf-images/gallery/11.jpg";
import Twelve from "../../../ggcf-images/gallery/12.jpg";
import Thirteen from "../../../ggcf-images/gallery/13.jpg";
import Fourteen from "../../../ggcf-images/gallery/14.jpg";
import Fifteen from "../../../ggcf-images/gallery/15.jpg";
import Sixteen from "../../../ggcf-images/gallery/16.jpg";
import Seventeen from "../../../ggcf-images/gallery/17.jpg";

const imgSize = faithStyle.imgSize;
const frame = faithStyle.frame;

const image0 = <img src={Zero} className={imgSize} alt="image1" />;
const image1 = <img src={One} className={imgSize} alt="image2" />;
const image2 = <img src={Two} className={imgSize} alt="image2" />;
const image3 = <img src={Three} className={imgSize} alt="image2" />;
const image4 = <img src={Four} className={imgSize} alt="image2" />;
const image5 = <img src={Five} className={imgSize} alt="image2" />;
const image6 = <img src={Six} className={imgSize} alt="image2" />;
const image7 = <img src={Seven} className={imgSize} alt="image2" />;
const image8 = <img src={Eight} className={imgSize} alt="image2" />;
const image9 = <img src={Nine} className={imgSize} alt="image2" />;
const image10 = <img src={Ten} className={imgSize} alt="image2" />;
const image11 = <img src={Eleven} className={imgSize} alt="image2" />;
const image12 = <img src={Twelve} className={imgSize} alt="image2" />;
const image13 = <img src={Thirteen} className={imgSize} alt="image2" />;
const image14 = <img src={Fourteen} className={imgSize} alt="image2" />;
const image15 = <img src={Fifteen} className={imgSize} alt="image2" />;
const image16 = <img src={Sixteen} className={imgSize} alt="image2" />;
const image17 = <img src={Seventeen} className={imgSize} alt="image2" />;

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
      items: 2,
    },
    tabletSM: {
      breakpoint: { max: 768, min: 600 },
      items: 2,
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
      <div className={frame}>{image0}</div>
      <div className={frame}>{image1}</div>
      <div className={frame}>{image2}</div>
      <div className={frame}>{image3}</div>
      <div className={frame}>{image4}</div>
      <div className={frame}>{image5}</div>
      <div className={frame}>{image6}</div>
      <div className={frame}>{image7}</div>
      <div className={frame}>{image8}</div>
      <div className={frame}>{image9}</div>
      <div className={frame}>{image10}</div>
      <div className={frame}>{image11}</div>
      <div className={frame}>{image12}</div>
      <div className={frame}>{image13}</div>
      <div className={frame}>{image14}</div>
      <div className={frame}>{image15}</div>
      <div className={frame}>{image16}</div>
      <div className={frame}>{image17}</div>
    </Carousel>
  );
};
export default Gallery;
