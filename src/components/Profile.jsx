import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import AdSectionProfile from "./AdSectionProfile";
import EditSectionProfile from "./EditSectionProfile";
import MyFooter from "./MyFooter";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Right>LEFT SECTION</Right>
        </Col>
        <Col md={4}>
          <EditSectionProfile />
          <AdSectionProfile />
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
