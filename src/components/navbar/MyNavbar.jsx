import { Container, Navbar, InputGroup, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./mynavbar.css"

const MyNavbar = ({ profile }) => {
  return (
    <div className="wrapper-nav">
      <Container id="nav-container">
        <Navbar bg="light">
          <Link to="/">
            <img src="/images/home-logo.svg" alt="" />
          </Link>
          <div id="search">
            <InputGroup size="sm" className="mx-2 ">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  <i className=" text-muted bi bi-search"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl className="searchPadding" aria-label="Small" placeholder="Search" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          </div>
          <Container id="icons-container">
            <ul id="ul-nav">
              <li>
                <Link to="/">
                  <div className="text-center text-muted">
                    <i className="bi bi-house-door-fill toBlack"></i>
                  </div>
                  <span className="text-muted spanNavLinks">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="text-center text-muted">
                    <i className="bi bi-people-fill toBlack"></i>
                  </div>
                  <span className="text-muted spanNavLinks">My Network</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="text-center text-muted">
                    <i className="bi bi-briefcase-fill toBlack"></i>
                  </div>
                  <span className="text-muted spanNavLinks">Jobs</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="text-center text-muted">
                    <i className="bi bi-chat-dots-fill toBlack"></i>
                  </div>
                  <span className="text-muted spanNavLinks">Messaging</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="text-center text-muted">
                    <i className="bi bi-bell-fill toBlack"></i>
                  </div>
                  <span className="text-muted spanNavLinks">Notifications</span>
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-center text-muted">
                  <div>
                    <img src={profile.image} alt="" id="user-icon" />
                  </div>
                  <span className="text-muted spanNavLinks">
                    Me<i class="bi bi-caret-down-fill "></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-center text-muted">
                  <div className="text-center text-muted">
                    <i className="bi bi-grid-3x3-gap-fill toBlack"></i>
                  </div>
                  <span className="text-muted spanNavLinks">
                    Work<i class="bi bi-caret-down-fill"></i>
                  </span>
                </Link>
              </li>
              <span className="brownColor">
                Get Hired Faster,
                <br />
                Try Premium Free
              </span>
            </ul>
          </Container>
        </Navbar>
      </Container>
    </div>
  )
}

export default MyNavbar
