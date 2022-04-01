import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftNetwork from "./LeftNetwork";
import RightNetwork from "./RightNetwork";

const MyNetwork = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <LeftNetwork />
        </Col>
        <Col md={8}>
          <RightNetwork />
        </Col>
      </Row>
    </Container>
  );
};

export default MyNetwork;
