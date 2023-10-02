import React from "react";
import { Button, Col, Row, Image } from "react-bootstrap";
import HeaderStyle from "./Header.module.css";
import Logo from "../../images/communityoflovelogo.png";

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

  return (
    <>
      <Row id="header">
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image src={Logo} className={LogoStyleDesktop} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className={titleDesktop}>Community Of Love</h1>
            <h2 className={titleH2Desktop}>ALL FOR THE GLORY OF GOD</h2>
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
              GODS GOSPEL CAFE
            </Button>
          </div>
        </Col>
        <Col>
          <div className={comingSoon}>
            <Button
              href="/tmp/communityoflove2022.com/#coming-soon"
              className={btnDesktop}
            >
              COMING SOON
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
              COURSES
            </Button>
          </div>
        </Col>
        <Col style={{ paddingRight: "0" }}>
          <div className={donateTop}>
            <Button
              href="/tmp/communityoflove2022.com/#quick-links"
              className={btnDesktop}
            >
              DONATE
            </Button>
          </div>
        </Col>
        <Col>
          <div className={prayerTop}>
            <Button
              href="/tmp/communityoflove2022.com/#quick-links"
              className={btnDesktop}
            >
              PRAYER/TESTIMONY
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default DesktopHeader;
