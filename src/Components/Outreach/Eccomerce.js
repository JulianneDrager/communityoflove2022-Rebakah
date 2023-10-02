import React from "react";
import { Button, Row, Col, Image, Card } from "react-bootstrap";
import img1 from "../../images/cal1.jpg";
import img2 from "../../images/cal12.jpg";
import img3 from "../../images/cal13.jpg";
import img4 from "../../images/cal14.jpg";
import img5 from "../../images/cal15.jpg";
import img6 from "../../images/cal16.jpg";
import StoreStyle from "./Store.module.css";
import Navigation from "../ui/Nav";

const Eccomerce = () => {
  const imgSizeEcc = StoreStyle.imgSizeEcc;
  const storeBtn = StoreStyle.storeBtn;
  return (
    <>
    <Navigation/>
      <Row>
        <Col sm="sm" md="6" lg="6">
          <Image className={imgSizeEcc} src={img1} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Text style={{ color: "white", margin: "0" }}>
              Make Today Extraordinary Calendar
            </Card.Text>
            <Button
              href="https://www.paypal.com/donate/?hosted_button_id=EFZSTS26GPHGN"
              className={storeBtn}
            >
              Buy
            </Button>
          </div>
        </Col>
        <Col sm="sm" md="6" lg="6">
          <Image className={imgSizeEcc} src={img2} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Text style={{ color: "white", margin: "0" }}>
              Garden Of Grace Calendar
            </Card.Text>
            <Button
              href="https://www.paypal.com/donate/?hosted_button_id=LCTQS3PN7EKXA"
              className={storeBtn}
            >
              Buy
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="sm" md="6" lg="6">
          <Image className={imgSizeEcc} src={img3} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Text style={{ color: "white", margin: "0" }}>
              Waves of Peace Calendar
            </Card.Text>
            <Button
              href="https://www.paypal.com/donate/?hosted_button_id=V2CFMZF2HCKBL"
              className={storeBtn}
            >
              Buy
            </Button>
          </div>
        </Col>
        <Col sm="sm" md="6" lg="6">
          <Image className={imgSizeEcc} src={img4} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Text style={{ color: "white", margin: "0" }}>
              Puppies and Kittens Calendar
            </Card.Text>
            <Button
              href="https://www.paypal.com/donate/?hosted_button_id=T6UMWGA4JDDAY"
              className={storeBtn}
            >
              Buy
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="sm" md="6" lg="6">
          <Image className={imgSizeEcc} src={img5} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Text style={{ color: "white", margin: "0" }}>
              Pathways Calendar
            </Card.Text>
            <Button
              href="https://www.paypal.com/donate/?hosted_button_id=S6HWJ3HWCN7FY"
              className={storeBtn}
            >
              Buy
            </Button>
          </div>
        </Col>
        <Col sm="sm" md="6" lg="6">
          <Image className={imgSizeEcc} src={img6} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Text style={{ color: "white", margin: "0" }}>
              Light For The Journey Calendar
            </Card.Text>
            <Button
              href="https://www.paypal.com/donate/?hosted_button_id=A6PJWNY22EM8G"
              className={storeBtn}
            >
              Buy
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Eccomerce;
