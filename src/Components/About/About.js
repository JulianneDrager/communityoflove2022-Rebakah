import React from "react";
import AboutStyle from "./AboutStyle.module.css";
import LearnMoreButton from "./LearnMoreButton";
import profileImg from "../../images/mobile-about/sharon-about.jpg";
import Divider from "../Divider/Divider";
import GalleryAbout from "./GalleryAbout";
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
                  {matchesLg && (
                    <div className={titleImgWrapper}>
                      <p className={title}>Welcome to the Community</p>
                      <p className={subTitle}>
                        Where <em>you </em>matter
                      </p>
                      <div className={divider}></div>
                      <GalleryAbout />
                    </div>
                  )}

                  {!matchesLg && (
                    <div className={titleImgWrapper}>
                      <GalleryAbout />
                    </div>
                  )}

                  <div className={textAndBtnWrapper}>
                    <div className={aboutParagraph}>
                      {!matchesLg && (
                        <>
                          <p className={title}>Welcome to the Community</p>
                          <p className={subTitle}>
                            Where <em>you</em> matter
                          </p>
                          <div className={divider}></div>
                        </>
                      )}
                      <span
                        style={{ fontSize: "1.5rem", lineHeight: "1.5rem" }}
                      >
                        Hello my name is Sharon Chatman the Founder/CEO of
                        Community of Love.
                      </span>
                      <hr />
                      <p>
                        It's a pleasure to introduce myself to all of you
                        wonderful people. I started this company with the
                        expectations of providing services to help all
                        communities all around the world.
                      </p>
                      I am a mother, a grandmother, an aunt, a cousin, a niece,a
                      daughter, a godmother, a friend, and most importantly a
                      child of God.
                    </div>

                    <LearnMoreButton />
                  </div>
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
