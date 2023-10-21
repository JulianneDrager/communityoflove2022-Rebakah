import React from "react";
import { Button, Col, Row, Image } from "react-bootstrap";
import HeaderStyle from "./css/Header.module.css";
import Logo from "../../../images/communityoflovelogo.png";
import facebook from "../../../images/mobile-header/facebook.png";
import Instagram from "../../../images/mobile-header/instagram.png";
import LinkedIn from "../../../images/mobile-header/linkedin.png";

const DesktopHeader = () => {
  const btnDesktop = HeaderStyle.btnDesktop;
  const LogoStyleDesktop = HeaderStyle.LogoStyleDesktop;
  const outreach = HeaderStyle.outreach;
  const comingSoon = HeaderStyle.comingSoon;
  const onlineCourses = HeaderStyle.onlineCourses;
  const donateTop = HeaderStyle.donateTop;
  const prayerTop = HeaderStyle.prayerTop;
  const titleDesktop = HeaderStyle.titleDesktop;
  const titleH2Desktop = HeaderStyle.titleH2Desktop;
  const colHeaderWrapper = HeaderStyle.colHeaderWrapper;
  const socialWrapperHeader = HeaderStyle.socialWrapperHeader;
  const socialIconStyle = HeaderStyle.socialIconStyle;
  const logoDesktopWrapper = HeaderStyle.logoDesktopWrapper;

  return (
    <>
      <Row id="header">
        <Col className={colHeaderWrapper}>
          <div className={logoDesktopWrapper}>
            <Image src={Logo} className={LogoStyleDesktop} />
          </div>
          <div>
            <h1 className={titleDesktop}>Community Of Love</h1>
            <h2 className={titleH2Desktop}>ALL FOR THE GLORY OF GOD</h2>
            <div className={socialWrapperHeader}>
              <Image src={facebook} className={socialIconStyle} />
              <Image src={Instagram} className={socialIconStyle} />
              <Image src={LinkedIn} className={socialIconStyle} />
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginBottom: ".8rem" }}>
        <Col style={{ paddingRight: "0" }} md={4}>
          <div className={outreach}>
            <Button
              href="/tmp/communityoflove2022.com/#cafe"
              className={btnDesktop}
            >
              GOD'S GOSPEL CAFE
            </Button>
          </div>
        </Col>
        <Col>
          <div className={comingSoon}>
            <Button
              href="/tmp/communityoflove2022.com/#coming-soon"
              className={btnDesktop}
            >
              FAMILY SERVICES
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ paddingRight: "0" }} md={4}>
          <div className={onlineCourses}>
            <Button
              href="/tmp/communityoflove2022.com/#courses"
              className={btnDesktop}
            >
              FOREIGN LANGUAGE COURSES
            </Button>
          </div>
        </Col>
        <Col style={{ paddingRight: "0" }}>
          <div className={donateTop}>
            <Button
              href="/tmp/communityoflove2022.com/#quick-links"
              className={btnDesktop}
            >
              GIVE/PARTNER
            </Button>
          </div>
        </Col>
        <Col>
          <div className={prayerTop}>
            <Button
              href="/tmp/communityoflove2022.com/#quick-links"
              className={btnDesktop}
            >
              REQUEST PRAYER
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default DesktopHeader;
