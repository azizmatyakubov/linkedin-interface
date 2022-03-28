import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MyJumbotrons from "./MyJumbotron";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <MyJumbotrons />
        </Col>
        <Col md={4}></Col>
      </Row>
      <Footer>footer</Footer>
    </Container>
  );
};

export default Profile;

const Footer = styled.div`
  background-color: pink;
`;
