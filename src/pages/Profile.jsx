import { Container, Row, Col } from "react-bootstrap";
import MyJumbotron from "../components/jumbotron/MyJumbotron";
import AdSectionProfile from "../components/AdSectionProfile";
import EditSectionProfile from "../components/EditSectionProfile";
import People from "../components/People";
import ExperienceSection from "../components/experience/ExperienceSection";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Profile = (props) => {
  const [myProfile, setMyProfile] = useState({});
  const [userProfile, setUserProfile] = useState({});
  const myID = "6242131ed339840015c883bb";
  const [experience, setExperience] = useState();
  const param = useParams();
  console.log("this is param", param);

  // check if url has id then show data related to id else show data related to myID
  useEffect(() => {
    if (param.id) {
      fetchProfileById(param.id);
      fetchExperiences(param.id);
    } else {
      fetchExperiences(myID);
      fetchMyProfile();
    }
  }, [param]);

  const fetchExperiences = async (id) => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        id +
        "/experiences",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzOGQyY2MzNjA3MDAwMTVmNmZkMzMiLCJpYXQiOjE2NDg1OTQyMjAsImV4cCI6MTY0OTgwMzgyMH0.VHqhiens_PkTS2JO-8hNQOytWeTf7PkUQsG9GfchqhY",
        },
      }
    );
    const data = await response.json();
    console.log(data, "this is experience");
    setExperience(data);
  };

  const fetchMyExperience = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/6242131ed339840015c883bb/experiences",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzOGQyY2MzNjA3MDAwMTVmNmZkMzMiLCJpYXQiOjE2NDg1OTQyMjAsImV4cCI6MTY0OTgwMzgyMH0.VHqhiens_PkTS2JO-8hNQOytWeTf7PkUQsG9GfchqhY",
        },
      }
    );
    const data = await response.json();
    console.log(data, "this is experience");
    setExperience(data);
  };

  // Get only profile data from API and assign to state
  const fetchMyProfile = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    const data = await response.json();
    setUserProfile(data);
    // this is the data that we get from the api
  };

  const fetchProfileById = async (id) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + id,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzOGQyY2MzNjA3MDAwMTVmNmZkMzMiLCJpYXQiOjE2NDg1OTQyMjAsImV4cCI6MTY0OTgwMzgyMH0.VHqhiens_PkTS2JO-8hNQOytWeTf7PkUQsG9GfchqhY",
          },
        }
      );

      if (res.ok) {
        let data = await res.json();
        setUserProfile(data);
      }
    } catch (error) {}
  };

  return (
    <div style={{ backgroundColor: "#F3F2EF" }}>
      <Container>
        <Row>
          {/* LEFT SIDE  */}
          <Col md={8}>
            <MyJumbotron me={userProfile} getMe={fetchMyProfile} />

            <ExperienceSection
              data={experience}
              getExp={fetchExperiences}
              getMyExp={fetchMyExperience}
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
};

export default Profile;
