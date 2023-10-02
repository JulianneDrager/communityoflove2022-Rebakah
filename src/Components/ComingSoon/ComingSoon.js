import React from "react";
import { Card, Container, Image, Col, Row } from "react-bootstrap";
// import MenuStyle from "../PrayerAndTestimony/PrayerStyle.module.css";
import EmployeeIcon from "../../images/mobile-coming-soon/employee-icon.png";
import EmployerIcon from "../../images/mobile-coming-soon/employeer-icon.png";
import PetIcon from "../../images/mobile-coming-soon/pet-icon.png";
import DividerRight from "../Divider/DividerRight";
import ComingSoonStyle from "./ComingSoonStyle.module.css";

const VenderSection = () => {
  const EmpIconStyle = ComingSoonStyle.EmpIconStyle;
  const EmprIconStyle = ComingSoonStyle.EmprIconStyle;
  const PetIconStyle = ComingSoonStyle.PetIconStyle;
  const rowWrapper = ComingSoonStyle.rowWrapper;
  const divWrapper = ComingSoonStyle.divWrapper;
  const comingSoonText = ComingSoonStyle.comingSoonText;
  const h1Style = ComingSoonStyle.h1Style;
  const h5Style = ComingSoonStyle.h5Style;
  const colStyle = ComingSoonStyle.colStyle;
  const colTitleStyle = ComingSoonStyle.colTitleStyle;
  const petColStyle = ComingSoonStyle.petColStyle;
  const servColStyle = ComingSoonStyle.servColStyle;
  const pStyle = ComingSoonStyle.pStyle;
  const pStyle2 = ComingSoonStyle.pStyle2;
  const pStyle2a = ComingSoonStyle.pStyle2a;
  const rowWrapperTop = ComingSoonStyle.rowWrapperTop;
  const servParWrapper = ComingSoonStyle.servParWrapper;

  return (
    <>
      <div id="coming-soon">
        <Row className={rowWrapperTop}>
          <Col className={colTitleStyle}>
            <p className={comingSoonText}>Coming Soon</p>
            <h1 className={h1Style}>Community Services</h1>
          </Col>
        </Row>
        <Row className={rowWrapper}>
          <div className={divWrapper}>
            <Col xs={12} md={4} className={colStyle}>
              <Image
                className={EmpIconStyle}
                src={EmployeeIcon}
                alt="acts-scripture"
              />
              <h5 className={h5Style}>Calling Employees</h5>
              <p className={pStyle}>
                Apply and be matched for the perfect position
              </p>
            </Col>
            <Col
              xs={12}
              md={4}
              style={{ marginTop: "1rem" }}
              className={colStyle}
            >
              <Image
                className={EmprIconStyle}
                src={EmployerIcon}
                alt="acts-scripture"
              />
              <h5 className={h5Style}>Calling Employers</h5>
              <p className={pStyle}>
                Seamlessly post your needs and communicate qualified talent's
              </p>
            </Col>
            <Col
              xs={12}
              md={4}
              style={{ marginTop: "1rem" }}
              className={petColStyle}
            >
              <Image
                className={PetIconStyle}
                src={PetIcon}
                alt="acts-scripture"
              />
              <h5 className={h5Style}>Calling Moms & Pops</h5>
              <p className={pStyle}>
                Own a pet? Have children? Find a service you need fast and safe
              </p>
            </Col>
            <Col
              xs={12}
              md={12}
              style={{ marginTop: "1rem" }}
              className={servColStyle}
            >
              <h5 className={h5Style}>
                Community of Love Family Services will Include The Following:
              </h5>
              <div className={servParWrapper}>
                <p className={pStyle2}>Babysitting Services</p>
                <p className={pStyle2a}>Childcare Services</p>
                <p className={pStyle2}>Tutoring Services</p>
                <p className={pStyle2a}>Pet Sitting Services</p>
                <p className={pStyle2}>Counseling Services</p>
                <p className={pStyle2a}>House Cleaning Services</p>
                <p className={pStyle2}>Foreign Language Courses</p>
                <p className={pStyle2a}>Transport & Carpool Services</p>
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
