import { Container,Row, Col} from "react-bootstrap"
import "./expstyle.css"


const ExperienceSection =() => {

    return (
    
    <Container id="container-wrapper" className="mt-4">
        <Row className="mt-3">
        <Col>
             <h4>Experience</h4>
        </Col>
        <Col className="icons-col">
            <img src="/images/plus-icon.svg" alt="" />
            <img src="/images/pencil.svg" alt="" />
        </Col>
        </Row>


        <Row className="mt-3">
        <Col md={2}>
            <img src="/images/img1.jpg" alt="" />
        </Col>
        <Col md={4} id="text-col">
            <h6>Role</h6>
            <span>Company</span>
            <p>Start Date - End Date - Place</p>
        </Col>
        
        </Row>
        <hr className="style-hr" />


        <Row className="mt-2"> 
        <Col md={2}>
            <img src="/images/img1.jpg" alt="" />
        </Col>
        <Col md={4} id="text-col">
            <h6>Role</h6>
            <span>Company</span>
            <p>Start Date - End Date - Place</p>
        </Col>
        </Row>
        <hr className="style-hr" />

        <Row className="mt-2"> 
        <Col md={2}>
            <img src="/images/img1.jpg" alt="" />
        </Col>
        <Col md={4} id="text-col">
            <h6>Role</h6>
            <span>Company</span>
            <p>Start Date - End Date - Place</p>
        </Col>
        </Row>
    </Container>
    
    
    
    
    
    )

    
}

export default ExperienceSection