import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MyJumbotrons from "./MyJumbotron";
import MyFooter from "./footer/MyFooter";
import AdSectionProfile from "./AdSectionProfile";
import EditSectionProfile from "./EditSectionProfile";
import People from "./People";


const Profile = () => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setProfile(data);
  };

  return (

    <div style={{ backgroundColor: "#F3F2EF" }}>
      <Container>
        <Row>
          <Col md={8}>
             <MyJumbotrons />
          </Col>
          <Col md={4}>
            <EditSectionProfile />
            <AdSectionProfile />
            <People title="People also viewed" data={profile} />
            <People title="People you may know" data={profile} />
          </Col>
        </Row>
        <Footer>footer</Footer>
        <MyFooter />
      </Container>
    </div>

  );
};

export default Profile;

const Footer = styled.div`
  background-color: pink;
`;
