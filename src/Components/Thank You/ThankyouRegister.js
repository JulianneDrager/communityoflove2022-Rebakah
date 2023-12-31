import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import ThankyouStyle from "./Thankyou.module.css";
import Wrapper from "../ui/Wrapper";

const ThankyouRegister = () => {
  const { name } = useParams();
  //   console.log(name);
  const cardWrapper = ThankyouStyle.cardWrapper;
  const innerCardWrapper = ThankyouStyle.innerCardWrapper;
  const cardBody = ThankyouStyle.cardBody;

  return (
    <>
      <Wrapper className="contactBody"></Wrapper>

      <Wrapper className={cardWrapper}>
        <Wrapper className={innerCardWrapper}>
          <Wrapper className={cardBody}>
            <h1>
              Hello <b>{name}</b>
            </h1>
            <h2>Thank you for registering for Live 2023!<br/>
            
            <em>We look forward to seeing you soon</em>

            </h2>
            
            <br />
            <Button
              // style={{ marginTop: "1rem" }}
              variant={"dark"}
              href="https://www.paypal.com/donate/?hosted_button_id=X2L5DS4DAJVKJ"
            >
              WANT TO BE A BLESSING? YOU CAN SOW HERE
            </Button>

            <Button
              style={{ marginTop: "1rem", background: "none", border: "none", color: "black" }}
              href="/tmp/jermainekee.com"
            >
              Back to Website
            </Button>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};
export default ThankyouRegister;
