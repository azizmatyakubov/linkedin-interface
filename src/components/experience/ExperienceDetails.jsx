import "./expstyle.css"
import { Container, Row, Col } from "react-bootstrap";
import EditSectionProfile from "../EditSectionProfile";

const ExperienceDetails =() => {

    return (
        <Container id="container-exp-details">
           <Col md={8}>
                <Container id="container-wrapper" className="mt-4 pb-3 ">
                <Row className="mt-3">
                  <Col>
                    <h4>Experience</h4>
                  </Col>
                
                  <Col className="icons-col">
                    <img src="/images/plus-icon.svg" alt=""/>
                    <img src="/images/pencil.svg" alt="" id="pencil-icon"/>
                  </Col>
                </Row>  
                </Container>
           </Col>
           <Col md={4}>
                <EditSectionProfile />
           </Col>
        </Container>
    )
}

export default ExperienceDetails