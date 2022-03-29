import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MyJumbotrons from "./jumbotron/MyJumbotron";
import MyFooter from "./footer/MyFooter";
import AdSectionProfile from "./AdSectionProfile";
import EditSectionProfile from "./EditSectionProfile";
import People from "./People";
import { useParams } from "react-router";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  // get the id from the url
  const param = useParams();

  // it is like componetDidMount
  useEffect(() => {
    fetchApi();
  }, []);

  // Get people from API and assign to state
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
    setProfile(data);
  };

  return (
    <div style={{ backgroundColor: "#F3F2EF" }}>
      <Container>
        <Row>
          {/* LEFT SIDE  */}
          <Col md={8}>
            <MyJumbotrons />
          </Col>
          {/* RIGHT SIDE  */}
          <Col md={4}>
            <EditSectionProfile />
            <AdSectionProfile />
            {/* People component takes state as a props data = [{user1}, {user2}, {user3}] */}
            <People title="People also viewed" data={profile} />
            <People title="People you may know" data={profile} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;

const Footer = styled.div`
  background-color: pink;
`;
