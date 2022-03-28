import {
  Container,
  Navbar,
  Row,
  Col,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
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
            <div>
              <img src="/images/nav-home.svg" alt="" />
              <p>Home</p>
            </div>
            <div>
              <img src="/images/nav-network.svg" alt="" />
              <p>My Network</p>
            </div>
            <div>
              <img src="/images/nav-jobs.svg" alt="" />
              <p>Jobs</p>
            </div>
            <div>
              <img src="/images/nav-messaging.svg" alt="" />
              <p>Messaging</p>
            </div>
            <div>
              <img src="/images/nav-notifications.svg" alt="" />
              <p>Notifications</p>
            </div>
              <ButtonGroup>
             <div id="user-wrapper">
                <img src="/images/user.svg" alt="" id="user-img"/>
               
                  <DropdownButton
                    variant="light"
                    title="Me"
                    id="bg-nested-dropdown"
                  >
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                  </DropdownButton>
             </div>
              </ButtonGroup>
          </Col>
          <Col md={2}>
            <Col>
                <ButtonGroup>
             <div id="user-wrapper">
                <img src="/images/nav-work.svg" alt=""/>
               
                  <DropdownButton
                    variant="light"
                    title="Work"
                    id="bg-nested-dropdown"
                  >
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                  </DropdownButton>
             </div>
              </ButtonGroup>
            </Col>
            <span>Get Sales Navigator</span>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
