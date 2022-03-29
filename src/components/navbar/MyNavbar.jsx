import {
  Container,
  Navbar,
  Row,
  Col,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import "./mynavbar.css";

const MyNavbar = () => {
  return (
    <Navbar className="navbar">
      <Container className="navbar-container">
        <Row className="w-100 row-navbar">
          <Col xs={2} sm={4} md={5} className="left-section">
            <img src="/images/home-logo.svg" alt="" />
            <input className="input-field" type="text" placeholder="Search" />
          </Col>
          <Col xs={4} md={5} className="col-md5-icons">
            <div>
              <img src="/images/nav-home.svg" alt="" />
              <p className="navbar-icon__text">Home</p>
            </div>
            <div>
              <img src="/images/nav-network.svg" alt="" />
              <p className="navbar-icon__text">My Network</p>
            </div>
            <div>
              <img src="/images/nav-jobs.svg" alt="" />
              <p className="navbar-icon__text">Jobs</p>
            </div>
            <div>
              <img src="/images/nav-messaging.svg" alt="" />
              <p className="navbar-icon__text">Messaging</p>
            </div>
            <div>
              <img src="/images/nav-notifications.svg" alt="" />
              <p className="navbar-icon__text">Notifications</p>
            </div>
             <ButtonGroup>
              <div id="user-wrapper">
                <img src="/images/user.svg" alt="" id="user-img" />

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
           {/*   <div id="user-wrapper">
              <img src="/images/user.svg" alt="" id="user-img"/>
              <p style ={{paddingTop: "5px"}}>Me</p>
            </div> */}
          </Col>
          <Col xs={4} md={2} id="work-border" className="px-0">
            <ButtonGroup>
              <div id="user-wrapper">
                <img
                  src="/images/nav-work.svg"
                  alt=""
                  style={{ marginBottom: "-5px" }}
                />

                <DropdownButton
                  variant="light"
                  title="Work"
                  id="bg-nested-dropdown-2"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
              </div>
            </ButtonGroup>

            <span>Get Sales Navigator</span>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
