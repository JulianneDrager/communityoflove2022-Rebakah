import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeaderStyle from "./Header.module.css";
import Sharon from "../../images/mobile-header/sharon.jpg";
import SharonSlideBackground from "../../images/mobile-header/sharon-slide-background.jpg";
import One from "../../images/mobile-header/outreach.jpg";
import Three from "../../images/mobile-header/coming-soon.jpg";
import Four from "../../images/mobile-header/online-courses.jpg";
import Five from "../../images/mobile-header/donate.jpg";
import Six from "../../images/mobile-header/prayer.jpg";

const Gallery = () => {
  const galleryCard = HeaderStyle.galleryCard;
  const galleryCardSharon = HeaderStyle.galleryCardSharon;
  const gallerySlideTitle = HeaderStyle.gallerySlideTitle;
  const galleryParagraph = HeaderStyle.galleryParagraph;
  const imgSize = HeaderStyle.imgSize;
  const btnGallery = HeaderStyle.btnGallery;
  const gallerySlideTitleSharon = HeaderStyle.gallerySlideTitleSharon;
  const imgSharonBack = HeaderStyle.imgSharonBack;

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

  const SharonPicture = (
    <div>
      <img className={imgSharonBack} src={SharonSlideBackground} alt="" />
      <div className={galleryCardSharon}>
        <h6 className={gallerySlideTitleSharon}>CEO & FOUNDER</h6>
        <p style={{marginTop:"-.8rem"}} className={galleryParagraph}>
          Sharon Chapman
        </p>
        <Button
          className={btnGallery}
          href="/tmp/communityoflove2022.com/#about"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );

  const Item1 = (
    <div>
      <img className={imgSize} src={One} alt="" />
      <div className={galleryCard}>
        <h6 className={gallerySlideTitle}>GOD'S GOSPEL CAFE</h6>
        <p className={galleryParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <Button
          className={btnGallery}
          href="/tmp/communityoflove2022.com/#cafe"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );

  const Item2 = (
    <div>
      <img className={imgSize} src={Three} alt="" />

      <div className={galleryCard}>
        <h6 className={gallerySlideTitle}>COMING SOON</h6>
        <p className={galleryParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <Button
          className={btnGallery}
          href="/tmp/communityoflove2022.com/#coming-soon"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );

  const Item3 = (
    <div>
      <img className={imgSize} src={Four} alt="" />
      <div className={galleryCard}>
        <h6 className={gallerySlideTitle}>LANGUAGE COURSES</h6>
        <p className={galleryParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <Button
          className={btnGallery}
          href="/tmp/communityoflove2022.com/#courses"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );

  const Item4 = (
    <div>
      <img className={imgSize} src={Five} alt="" />
      <div className={galleryCard}>
        <h6 className={gallerySlideTitle}>GIVE</h6>
        <p className={galleryParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <Button
          className={btnGallery}
          href="/tmp/communityoflove2022.com/#quick-links"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );

  const Item5 = (
    <div>
      <img className={imgSize} src={Six} alt="" />
      <div className={galleryCard}>
        <h6 className={gallerySlideTitle}>REQUEST PRAYER</h6>
        <p className={galleryParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
        <Button
          className={btnGallery}
          href="/tmp/communityoflove2022.com/#quick-links"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );

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
      <div>{SharonPicture}</div>
      <div>{Item1}</div>
      <div>{Item2}</div>
      <div>{Item3}</div>
      <div>{Item4}</div>
      <div>{Item5}</div> 
    </Carousel>
    // <Carousel

    // >
    //
    //
    //

    // </Carousel>
  );
};
export default Gallery;
