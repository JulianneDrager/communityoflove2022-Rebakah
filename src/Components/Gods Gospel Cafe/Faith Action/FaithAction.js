import React from "react";
import FaithStyle from "./css/FaithStyle.module.css";
import Gallery from "./Gallery";
import { Card, Image } from "react-bootstrap";
import FaithTitle from "../../../ggcf-images/mobile-faith-and-action/mobile-title-faith-and-action.png";
import FathTitleDesktop from "../../../ggcf-images/desktop-faith-and-action/desktop-title-frame-faith-and-action.png";
import { useMediaQuery } from "@mui/material";

const About = () => {
  const cardWrapper = FaithStyle.cardWrapper;
  const innerCardWrapper = FaithStyle.innerCardWrapper;
  const cardBody = FaithStyle.cardBody;
  const goldBar = FaithStyle.goldBar;
  const fathTitleStyle = FaithStyle.fathTitleStyle;
  const matchesMinWidth765 = useMediaQuery("(min-width: 765px)");

  return (
    <>
      <div id="faith">
        <div className={goldBar}></div>
        <Card className={cardWrapper}>
          <Card className={innerCardWrapper}>
            <div style={{ backgroundColor: "#ffffffBB" }}>
              {/* mobile view for showing mobile title */}
              {!matchesMinWidth765 && (
                <Image src={FaithTitle} className={fathTitleStyle} />
              )}

              {/* desktop view for showing desktop title */}
              {matchesMinWidth765 && (
                <Image src={FathTitleDesktop} className={fathTitleStyle} />
              )}
            </div>
            <Card.Body className={cardBody}>
              <Gallery />
            </Card.Body>
          </Card>
        </Card>
      </div>
    </>
  );
};
export default About;
