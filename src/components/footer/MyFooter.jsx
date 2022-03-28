import "./myfooter.css";
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <div className="wrapper-container">
      <Container>
        <Row>
          <img src="/images/login-logo.svg" alt="" />
        </Row>
        <Row className="mt-2">
          <Col xs={4} md={2} className="px-0">
            <ul id="list-footer">
              <li>About</li>
              <li>Community Guidelines</li>
              <li>Privacy and Terms</li>
              <li>Sales Solutions</li>
              <li>Safety Center</li>
            </ul>
          </Col>
          <Col xs={4} md={2} className="px-0">
            <ul id="list-footer">
              <li>Accessibility</li>
              <li>Careers</li>
              <li>Ad Choices</li>
              <li>Mobile</li>
            </ul>
          </Col>
          <Col xs={4} md={2} className="px-0">
            <ul id="list-footer">
              <li>Talent Solutions</li>
              <li>Marketing Solutions</li>
              <li>Advertising</li>
              <li>Small Business</li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="col-md-3-footer">
            <Row>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
              </div>
              <div className="p-style">
                <span>Questions</span>
                <p>Visit our Help Center</p>
              </div>
            </Row>
            <Row>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-gear-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </div>
              <div className="p-style">
                <span>Manage your account and privacy</span>
                <p>Go to your Settings</p>
              </div>
            </Row>
          </Col>
          <Col xs={6} md={3} className="col-md-3-footer">
            <div className="language-picker js-language-picker">
              <form action="" className="language-picker__form">
                <label for="language-picker-select">Select language</label>

                <div>
                  <select
                    name="language-picker-select"
                    id="language-picker-select"
                  >
                    <option lang="de" value="english">
                      English
                    </option>
                    <option lang="en" value="italiano" selected>
                      Italiano
                    </option>
                    <option lang="en" value="deutsch" selected>
                      Deutsch
                    </option>
                    <option lang="fr" value="francais">
                      Français
                    </option>
                    <option lang="it" value="nihongo">
                      日本語
                    </option>
                  </select>
                </div>
              </form>
            </div>
          </Col>
          <p style={{ color: "grey", fontSize: "12px" }}>
            LinkedIn Corporation ©2022
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default MyFooter;
