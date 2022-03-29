import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import './expstyle.css'

const SingleExperience = (props) => {
  return (
    <Container className="mt-4">
      <Row className="mt-3">
        <Col md={2}>
          <img src={props.data.image} alt="" />
        </Col>
        <Col md={4} id="text-col">
          <h6>{props.data.role}</h6>
          <span>{props.data.company}</span>
          <p>
            {props.data.startDate} - {props.data.endDate} - {props.data.area}
          </p>
        </Col>
      </Row>
      <hr className="style-hr" />
    </Container>
  );
};

export default SingleExperience;

