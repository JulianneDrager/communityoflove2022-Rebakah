import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import EmployeeIcon from "../../../images/mobile-coming-soon/employee-icon.png";
import EmployerIcon from "../../../images/mobile-coming-soon/employer-icon.png";
import ServiceFlyer from "../../../images/mobile-coming-soon/mobile-services-flyer.png";
import DesktopServiceFlyer from "../../../images/desktop-coming-soon/services-flyer.png";
import DividerRight from "../Divider/DividerRight";
import ComingSoonStyle from "./ComingSoonStyle.module.css";
import { useMediaQuery } from "@mui/material";

const VenderSection = () => {
  const EmpIconStyle = ComingSoonStyle.EmpIconStyle;
  const EmprIconStyle = ComingSoonStyle.EmprIconStyle;
  const rowWrapper = ComingSoonStyle.rowWrapper;
  const divWrapper = ComingSoonStyle.divWrapper;
  const comingSoonText = ComingSoonStyle.comingSoonText;
  const h1Style = ComingSoonStyle.h1Style;
  const h5Style = ComingSoonStyle.h5Style;
  const colStyle = ComingSoonStyle.colStyle;
  const colTitleStyle = ComingSoonStyle.colTitleStyle;
  const servColStyle = ComingSoonStyle.servColStyle;
  const pStyle = ComingSoonStyle.pStyle;
  const flyer = ComingSoonStyle.flyer;
  const rowWrapperTop = ComingSoonStyle.rowWrapperTop;
  const servParWrapper = ComingSoonStyle.servParWrapper;
  const matchesLg = useMediaQuery("(min-width:765px)");

  return (
    <>
      <div id="coming-soon">
        <Row className={rowWrapperTop}>
          <Col className={colTitleStyle}>
            <p className={comingSoonText}>Coming Soon</p>
            <h1 className={h1Style}>Family Services</h1>
          </Col>
        </Row>
        <Row className={rowWrapper}>
          <div className={divWrapper}>
            <Col xs={12} sm={12} md={6} lg={6} className={colStyle}>
              <Image
                className={EmpIconStyle}
                src={EmployeeIcon}
                alt="acts-scripture"
              />
              <h5 className={h5Style}>Find Services</h5>
              <p className={pStyle}>
                Inquire for assistance and find your perfect match
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className={colStyle}>
              <Image
                className={EmprIconStyle}
                src={EmployerIcon}
                alt="acts-scripture"
              />
              <h5 className={h5Style}>Employment Opportunities</h5>
              <p className={pStyle}>
                Find employment in various fields and locations
              </p>
            </Col>
            <Col xs={12} md={12} className={servColStyle}>
              <h5 className={h5Style}>
                Community of Love Family Services will Include The Following:
              </h5>
              <div className={servParWrapper}>
                {/* mobile view */}
                {!matchesLg && <Image src={ServiceFlyer} className={flyer} />}
                {/* desktop view */}
                {matchesLg && (
                  <Image src={DesktopServiceFlyer} className={flyer} />
                )}
              </div>
            </Col>
          </div>
        </Row>
      </div>
      <div style={{ marginTop: "1.8rem" }}>
        <DividerRight />
      </div>
    </>
  );
};
export default VenderSection;
