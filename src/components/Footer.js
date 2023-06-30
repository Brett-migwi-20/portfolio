import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/brett-migwi-3336651b9/" target="_blank"><img src={navIcon1} alt="Linkedin" /></a>
            <a href="https://github.com/Brett-migwi-20"><img src={navIcon2} alt="Github"  target="_blank"/></a>
            </div>
            <p>Copyright {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
