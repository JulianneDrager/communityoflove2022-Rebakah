import React from "react";
import AboutStyle from "./AboutStyle.module.css";
import LearnMoreButton from "./LearnMoreButton";
import profileImg from "../../images/mobile-about/sharon-about.jpg";
import Divider from "../Divider/Divider";
import GalleryAbout from "./GalleryAbout"
import { Card } from "react-bootstrap";
import { useMediaQuery } from "@mui/material";

const About = () => {
  const cardWrapper = AboutStyle.cardWrapper;
  const innerCardWrapper = AboutStyle.innerCardWrapper;
  const cardBody = AboutStyle.cardBody;
  const musicTitle = AboutStyle.musicTitle;
  const aboutParagraph = AboutStyle.aboutParagraph;
  const title = AboutStyle.title;
  const subTitle = AboutStyle.subTitle;
  const divider = AboutStyle.divider;
  const mainWrapper = AboutStyle.mainWrapper;
  const titleImgWrapper = AboutStyle.titleImgWrapper;
  const textAndBtnWrapper = AboutStyle.textAndBtnWrapper;

  const matchesLg = useMediaQuery("(max-width: 765px)");

  return (
    <>
      <div id="about">
 
        <Card className={cardWrapper}>
          <Card className={innerCardWrapper}>
            <Card.Body className={cardBody}>
              {/* <hr className={hrClass} /> */}

              <div>
                <div className={mainWrapper}>

                  { matchesLg && <div className={titleImgWrapper}>
                    <p className={title}>Welcome to the Community</p>
                    <p className={subTitle}>Were <em>you mater</em></p>
                    <div className={divider}></div>
                    <GalleryAbout />
                  </div>
                  }


                  { !matchesLg && <div className={titleImgWrapper}>
                    <GalleryAbout />
                  </div>
                  }

                  <div className={textAndBtnWrapper}>
                    <div className={aboutParagraph}>
                      {!matchesLg && 
                      <>
                    <p className={title}>Welcome to the Community</p>
                    <p className={subTitle}>Were <em>you mater</em></p>
                    <div className={divider}></div>
                      </>
                      }
                      <span style={{ fontSize: "1.5rem", lineHeight:"1.5rem" }}>
                        Hi, My name is Sharon Chatman. I am the founder of Community
                        of Love...
                      </span>
                      <hr />
                      Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>

                    <LearnMoreButton />

                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Card>
        <Divider/>
      </div>
    </>
  );
};
export default About;
