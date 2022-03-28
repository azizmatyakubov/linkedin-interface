import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./singleUser.css";

const SingleUser = (props) => {
  return (
    <Container className="mb-3">
      <Row>
        <Col md={2} className="image-section__singleUser">
          <img
            src={props.data.image}
            alt=""
            srcset=""
            className="single-user-img"
          />
        </Col>
        <Col md={8} className="mt-1">
          <p className="name__singleUser">
            {props.data.name} <span>- 2nd</span>
          </p>
          <p className="userTitle__singleUser">{props.data.title}</p>
          <Button variant="outline-secondary" className="button__singleUser">
            Connect
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleUser;
