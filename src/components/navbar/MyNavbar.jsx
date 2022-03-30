import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./mynavbar.css";

const MyNavbar = () => {
  return (
    <div className="wrapper-nav">
      <Container id="nav-container">
        <Navbar bg="light">
          <img src="/images/home-logo.svg" alt="" />
          <div id="search">
            <InputGroup size="sm" className="mx-2">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  <img src="/images/search-icon.svg" alt="" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </div>
          <Container id="icons-container">
            <ul id="ul-nav">
              <li>
                <img src="images/nav-home.svg" alt="" />
                <span>Home</span>
              </li>
              <li>
                <img src="images/nav-network.svg" alt="" />
                <span>My Network</span>
              </li>
              <li>
                <img src="images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </li>
              <li>
                <img src="images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </li>
              <li>
                <img src="images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </li>
              <li>
                <div>
                  <img src="images/user.svg" alt="" id="user-icon" />
                </div>
                <span>Me</span>
              </li>
              <li>
                <img src="images/nav-work.svg" alt="" />
                <span>Work</span>
              </li>
              <span>Get Sales Navigator</span>
            </ul>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default MyNavbar;
