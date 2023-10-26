import React from "react";
import { Button, Image } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import SlideOneAStyle from "../css/SlideOneA.module.css";
import divider from "../../../../images/bible-and-cross-icon.png";

const SlideOneA = () => {
  const galleryCardBoard = SlideOneAStyle.galleryCardBoard;
  const BoardTitle = SlideOneAStyle.BoardTitle;
  const imgSharonBack = SlideOneAStyle.imgSharonBack;
  const titleContainer = SlideOneAStyle.titleContainer;
  const titleWrapper = SlideOneAStyle.titleWrapper;
  const titleMargin = SlideOneAStyle.titleMargin;
  const subTitle = SlideOneAStyle.subTitle;

  return (
    <>
      <div className={imgSharonBack}>
        <div className={galleryCardBoard}>
          <h6 className={BoardTitle}>Board Members</h6>
          <div className={titleContainer}>
            <div className={titleWrapper}>
              <span className={subTitle}>Vice President:</span>
              <br />
              Sonya Ware
            </div>
            <div id="hello world" className={`${titleWrapper} ${titleMargin}`}>
              <span className={subTitle}>Treasurer:</span>
              <br />
              Jermell Griffin
            </div>
          </div>

          <hr style={{ margin: "1rem" }} />
          <p style={{ lineHeight: "1rem", margin: "0 .5rem 1rem 0" }}>
            “This is the day which the LORD hath made; we will rejoice and be
            glad in it.<em>-Psalm 118:24</em>”
          </p>

          <p style={{ lineHeight: "1rem", margin: "0 .5rem 1rem 0" }}>
            “For we live by faith, not by sight."" in it.
            <em>-2 Corinthians 5:7</em>”
          </p>

          {/* <Button
            className={`${btnGallery} ${btnMargin}`}
            href="/tmp/communityoflove2022.com/#about"
          >
            LEARN MORE
          </Button> */}
        </div>
      </div>
      {/* <Image style={{width:"100%", height:"auto"}} src={divider}/> */}
      </>
  );
};
export default SlideOneA;
