import { Container, Row, Col } from "react-bootstrap";
import MyJumbotron from "../components/jumbotron/MyJumbotron";
import AdSectionProfile from "../components/AdSectionProfile";
import EditSectionProfile from "../components/EditSectionProfile";
import People from "../components/People";
import ExperienceSection from "../components/experience/ExperienceSection";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Profile = (props) => {
  const [profile, setProfile] = useState({});
  const myID = "6270f5980270f1272fff0340";
  const param = useParams();

  // check if url has id then show data related to id else show data related to myID
  useEffect(() => {
    if (param.id) {
      fetchProfileById(param.id);
      console.log(profile)
    } else {
      fetchProfileById(myID)
    }
  }, [param]);

  const fetchProfileById = async (id) => {
    try {
      let res = await fetch(
        "https://linkedin-backend-01.herokuapp.com/profile/" + id
      );

      if (res.ok) {
        let data = await res.json();
        setProfile(data);
      }
    } catch (error) {}
  };

  return (
    <div style={{ backgroundColor: "#F3F2EF" }}>
      <Container>
        <Row>
          {/* LEFT SIDE  */}
          <Col md={8}>
            <MyJumbotron profile={profile} fetchProfileById={fetchProfileById} />

            <ExperienceSection
              data={profile.experiences}
              fetchProfileById={fetchProfileById}
              //getMyExp={fetchMyExperience}
            />

            {/*    <Section /> */}
          </Col>
          {/* RIGHT SIDE  */}
          <Col md={4}>
            <EditSectionProfile />
            <AdSectionProfile sticky={{ position: "static" }} />
            {/* People component takes state as a props data = [{user1}, {user2}, {user3}] */}
            <People title="People also viewed" data={props.data} />
            <People title="People you may know" data={props.data} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};;

export default Profile;
