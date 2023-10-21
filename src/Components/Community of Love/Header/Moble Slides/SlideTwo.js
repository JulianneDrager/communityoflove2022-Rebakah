import React from "react";
import { Button } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import HeaderStyle from "../css/Header.module.css";
import One from "../../../../images/mobile-header/outreach.jpg";

const SlideTwo = () => {
  const galleryCard = HeaderStyle.galleryCard;
  const gallerySlideTitle = HeaderStyle.gallerySlideTitle;
  const galleryParagraph = HeaderStyle.galleryParagraph;
  const imgSize = HeaderStyle.imgSize;
  const btnGallery = HeaderStyle.btnGallery;

  return (
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
};
export default SlideTwo;
