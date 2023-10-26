import React from "react";
import { Button } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import SlideTwoStyle from "../css/SlideTwo.module.css";

const SlideTwo = () => {
  const galleryCardCafe = SlideTwoStyle.galleryCardCafe;
  const btnGallery = SlideTwoStyle.btnGallery;
  const GospelTitle = SlideTwoStyle.GospelTitle;
  const imgSharonBack = SlideTwoStyle.imgSharonBack;
  const titleContainer = SlideTwoStyle.titleContainer;
  const titleWrapper = SlideTwoStyle.titleWrapper;
  const subTitle = SlideTwoStyle.subTitle;

  return (
    <div className={imgSharonBack}>
      <div className={galleryCardCafe}>
        <h6 className={GospelTitle}>Gods Gospel Cafe</h6>
        <div className={titleContainer}>
          <div className={titleWrapper}>
            <p className={subTitle}>
              The Branch Of Zion What Feeds The Community
            </p>
            <hr style={{ margin: "1rem" }} />
          </div>
          <p className={subTitle}>Built on the foundation of Matthew 5:13</p>
          <p>
            “Ye are the salt of the earth: but if the salt have lost his savour,
            wherewith shall it be salted? it is thenceforth good for nothing,
            but to be cast out, and to be trodden under foot of men.”
          </p>
        </div>

        <Button className={btnGallery} href="/tmp/communityoflove2022.com/cafe">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};
export default SlideTwo;
