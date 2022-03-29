
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MyJumbotrons from "./jumbotron/MyJumbotron";
import AdSectionProfile from "./AdSectionProfile";
import EditSectionProfile from "./EditSectionProfile";
import People from "./People";

import ExperienceSection from "./experience/ExperienceSection";


const Profile = (props) => {




  return (
    <div style={{ backgroundColor: "#F3F2EF" }}>
      <Container>
        <Row>
          {/* LEFT SIDE  */}
          <Col md={8}>
            <MyJumbotrons />

            <ExperienceSection />

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

const Footer = styled.div`
  background-color: pink;
`;
