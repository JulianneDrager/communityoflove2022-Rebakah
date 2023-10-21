import React from "react";
import AboutStyle from "./css/AboutStyle.module.css";
import Divider from "../Divider/Divider";
import Content from "./GalleryContainer/Content";
import MobileGalleryCont from "./GalleryContainer/MobileGalleryCont";
import { Card } from "react-bootstrap";

const About = () => {
  const cardWrapper = AboutStyle.cardWrapper;
  const innerCardWrapper = AboutStyle.innerCardWrapper;
  const cardBody = AboutStyle.cardBody;
  const mainWrapper = AboutStyle.mainWrapper;

  return (
    <>
      <div id="about">
        <Card className={cardWrapper}>
          <Card className={innerCardWrapper}>
            <Card.Body className={cardBody}>
              <div>
                <div className={mainWrapper}>
                  <MobileGalleryCont />
                  <Content />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Card>
        <Divider />
      </div>
    </>
  );
};
export default About;
