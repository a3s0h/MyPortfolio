import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import nish from "../assets/img/nish.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import leetcode from "../assets/img/leetcode.svg";
import codechef from "../assets/img/codechef.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} className="mt-10"> 
            <img src={nish} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon footer-icons">
                <a href="https://www.linkedin.com/in/nishant-bisht-8a476224a/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://leetcode.com/kartein/" target="_blank"><img src={leetcode} alt="" /></a>
                <a href="https://www.codechef.com/users/unk_07_nown" target="_blank"><img src={codechef} alt="" /></a>
              </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}