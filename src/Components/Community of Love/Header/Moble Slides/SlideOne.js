import React from "react";
import { Button } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import HeaderStyle from "../css/Header.module.css";
import SharonSlideBackground from "../../../../images/mobile-header/sharon-slide-background.jpg";

const SlideOne = () => {
  const galleryCardSharon = HeaderStyle.galleryCardSharon;
  const galleryParagraph = HeaderStyle.galleryParagraph;
  const btnGallery = HeaderStyle.btnGallery;
  const gallerySlideTitleSharon = HeaderStyle.gallerySlideTitleSharon;
  const imgSharonBack = HeaderStyle.imgSharonBack;

  return (
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
};
export default SlideOne;
