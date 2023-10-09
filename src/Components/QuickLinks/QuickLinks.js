import React from "react";
import { Row, Col, Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import QuickLinksStyle from "./QuickLinksStyle.module.css";
import DividerLeft from "../Divider/DividerLeft";

const QuickLinks = () => {
  const rowStyle = QuickLinksStyle.rowStyle;
  const btn = QuickLinksStyle.btn;
  const btnNeedPrayer = QuickLinksStyle.btnNeedPrayer;
  const btnWrapper = QuickLinksStyle.btnWrapper;
  const h1Title = QuickLinksStyle.h1Title;
  const h2Title = QuickLinksStyle.h2Title;
  const pStyle = QuickLinksStyle.pStyle;
  return (
    <>
      <DividerLeft />
      <Row id="quick-links" className={rowStyle}>
        <Col md={6}>
          <h1 className={h1Title}>Mission Statement</h1>
          <h2 className={h2Title}>"Nobody Left Behind"</h2>
          <p className={pStyle}>
            To Encourage, Inspire, and Motivate communities from Seniors to the
            babies with leadership and empowerment skills.  Our company believes
            that everyone has a purpose and will be committed to help people to
            embrace their purpose through support and empowerment.
          </p>
        </Col>
        <Col md={6}>
          <div className={btnWrapper}>
            <Button
              href="/tmp/communityoflove2022.com/prayer"
              className={btnNeedPrayer}
            >
              NEED PRAYER
            </Button>
            <Button className={btn}>GIVE</Button>
            <Button className={btn}>PARTNER</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default QuickLinks;
