import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MyFooter from "./MyFooter";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Right>LEFT SECTION</Right>
        </Col>
        <Col md={4}>
          <Left>RIGHT SECTION</Left>
        </Col>
      </Row>
      <Footer>footer</Footer>
      <MyFooter />
    </Container>
  );
};

export default Profile;

const Right = styled.div`
  background-color: green;
`;

const Left = styled.div`
  background-color: #002fff;
`;

const Footer = styled.div`
  background-color: pink;
`;
