import React from "react";
import { Button } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import SlideStyle from "../css/SlideOne.module.css";
import SharonSlideBackground from "../../../../images/mobile-header/sharon-slide-background.jpg";
import SharonImgLandscape from "../../../../images/mobile-header/sharon-ls.jpg";
import { useMediaQuery } from "@mui/material";

const SlideOne = () => {
  const galleryCardSharon = SlideStyle.galleryCardSharon;
  const btnGallery = SlideStyle.btnGallery;
  const gallerySlideTitleSharon = SlideStyle.gallerySlideTitleSharon;
  const imgSharonBack = SlideStyle.imgSharonBack;
  const landscape = SlideStyle.landscape;
  const sharonTitle = SlideStyle.sharonTitle;
  const cardGradient = SlideStyle.cardGradient;
  const pStyle = SlideStyle.pStyle;
  const matchesMinWidth568 = useMediaQuery("(min-width:568px)");

  return (
    <div className={cardGradient}>
      <div className={imgSharonBack}>
        <div className={galleryCardSharon}>
          <h6 className={gallerySlideTitleSharon}>CEO & FOUNDER</h6>
          <p className={sharonTitle}>Sharon Chapman</p>
          <p className={pStyle}>
            “Ye are the salt of the earth: but if the salt have lost his savour,
            wherewith shall it be salted? it is thenceforth good for nothing,
            but to be cast out, and to be trodden under foot of men.{" "}
            <em>-Matt 5:13</em>”
          </p>

          <Button
            className={btnGallery}
            href="/tmp/communityoflove2022.com/#about"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SlideOne;
