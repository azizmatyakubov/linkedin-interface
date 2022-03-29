
import { Container, Row, Col } from "react-bootstrap";
import MyJumbotron from "./jumbotron/MyJumbotron";
import AdSectionProfile from "./AdSectionProfile";
import EditSectionProfile from "./EditSectionProfile";
import People from "./People";

import ExperienceSection from "./experience/ExperienceSection";
import React, { useEffect, useState } from "react";
import { useParams} from 'react-router'


const Profile = (props) => {

const [experience, setExperience] =  useState()
const param ="5fc4af0bb708c200175de88e"




useEffect(() => {
fetchExperiences()
  }, [])

const fetchExperiences = async () => {
const response = await fetch (
  `https://striveschool-api.herokuapp.com/api/profile/${param}/experiences`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyZGE4YmRhMTNhZjAwMTUyYzFjNjAiLCJpYXQiOjE2NDg1NDg0OTEsImV4cCI6MTY0OTc1ODA5MX0.nDFXChjgeLm2c9zj1Nhwvj4A16nI_kFdxUuP3p_dy4A",
    },
  }
)
const data = await response.json();
setExperience(data);
}


  return (
    <div style={{ backgroundColor: "#F3F2EF" }}>
      <Container>
        <Row>
          {/* LEFT SIDE  */}
          <Col md={8}>
            <MyJumbotron />

            <ExperienceSection data={experience} /> 

            

         {/*    <Section /> */}

          </Col>
          {/* RIGHT SIDE  */}
          <Col md={4}>
            <EditSectionProfile />
            <AdSectionProfile />
            {/* People component takes state as a props data = [{user1}, {user2}, {user3}] */}
            <People title="People also viewed" data={props.data} />
            <People title="People you may know" data={props.data} />
          </Col>
        </Row>

        


      </Container>
    </div>
  );
};

export default Profile;



