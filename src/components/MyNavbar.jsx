import { Container, Navbar, Row, Col } from "react-bootstrap";
import "../App.css";

const MyNavbar = () => {
  return (
    <Navbar /* fixed="top" */ className="navbar">
      <Container className="navbar-container">
        <Row className="w-100 row-navbar">
          <Col md={5} className="col-md5">
            <img src="/images/home-logo.svg" alt="" />
            <input className="input-field" type="text" placeholder="Search" />
          </Col>
          <Col md={5} className="col-md5-icons">
            <img src="/images/nav-home.svg" alt="" />
            <img src="/images/nav-network.svg" alt="" />
            <img src="/images/nav-jobs.svg" alt="" />
            <img src="/images/nav-messaging.svg" alt="" />
            <img src="/images/nav-notifications.svg" alt="" />
            <img src="/images/down-icon.svg" alt="" />
          </Col>
          <Col md={2}>
            <Col>
              <img src="/images/nav-work.svg" alt="" />
            </Col>
            <span>Get Sales Navigator</span>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
