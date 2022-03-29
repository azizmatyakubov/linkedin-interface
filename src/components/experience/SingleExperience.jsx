import React from "react";
import {Container, Row, Col} from 'react-bootstrap'



const SingleExperience = (props) => {
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
            <img src={props.data.image} alt="" />
          </Col>
          <Col md={4} id="text-col">
            <h6>{props.data.role}</h6>
            <span>{props.data.company}</span>
            <p>{props.data.startDate} - {props.data.endDate} - {props.data.area}</p>
          </Col>
        </Row>
        <hr className="style-hr" />
      </Container>

    )
}

export default SingleExperience