import React from "react";
import { Button } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import SlideThreeAStyle from "../css/SlideThree.module.css";

const SlideTwo = () => {
  const galleryCardServ = SlideThreeAStyle.galleryCardServ;
  const btnGallery = SlideThreeAStyle.btnGallery;
  const FamilyTitle = SlideThreeAStyle.FamilyTitle;
  const imgSharonBack = SlideThreeAStyle.imgSharonBack;
  const titleContainer = SlideThreeAStyle.titleContainer;
  const titleWrapper = SlideThreeAStyle.titleWrapper;
  const subTitle = SlideThreeAStyle.subTitle;
  const listStyle = SlideThreeAStyle.listStyle;
  const listOne = SlideThreeAStyle.listOne;

  return (
      <div className={imgSharonBack}>
      <div className={galleryCardServ}>
        <span className={subTitle}>Coming Soon</span>
        <h6 className={FamilyTitle}>Family Services </h6>
        <div className={titleContainer}>
          <div className={titleWrapper}></div>

          <hr style={{ margin: ".05rem" }} />
          <p className={subTitle}>Services include:</p>

          <div id="hello world">
            <ul className={listStyle}>
              <div className={listOne}>
                <li>Hiring Employees</li>
                <li>Applying for Employment</li>
                <li>Babysitting</li>
                <li>Pet Sitting & Dog Walking</li>
                <li>Housekeeping & De-cluttering</li>
              </div>
              <div>
                <li>Tutoring</li>
                <li>Coaching & Mentoring</li>
                <li>Foreign language</li>
                <li>Transportation & Carpooling</li>
              </div>
            </ul>
          </div>
        </div>

        <Button className={btnGallery} href="/tmp/communityoflove2022.com/cafe">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};
export default SlideTwo;
