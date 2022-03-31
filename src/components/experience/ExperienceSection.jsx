import { Container, Row, Col } from "react-bootstrap";
import "./expstyle.css";
import SingleExperience from "./SingleExperience";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

// 6242131ed339840015c883bb

const ExperienceSection = (props) => {
  const [experiences, setExperiences] = useState(null);
  // const [experienceChanged, setExperienceChanged] = useState(0);
  const [addExperience, setAddExperience] = useState(false);

  const closeAddExperience = () => setAddExperience(false);
  const showAddExperience = () => setAddExperience(true);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("here");
    const experience = {
      role: role,
      company: company,
      startDate: startDate,
      endDate: endDate || null,
      description: description,
      area: location,
    };

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/6242131ed339840015c883bb/experiences`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
          },
        }
      );
      if (response.ok) {
        console.log("POSTED");
        props.getExp()
      } else {
        console.error("fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container id="container-wrapper" className="mt-4 pb-3">
        <Row className="mt-3">
          <Col>
            <h4>Experience</h4>
          </Col>

          <Col className="icons-col">
            <img src="/images/plus-icon.svg" alt="" onClick={showAddExperience}/>
           <Link to="/experience-details">
              <img src="/images/pencil.svg" alt="" id="pencil-icon"/>
           </Link>
          </Col>

          {props.data &&
            props.data.map((value) => {
              return <SingleExperience key={value._id} data={value}  getExp={props.getExp} />;
            })}
        </Row>
      </Container>

      <Modal show={addExperience} onHide={closeAddExperience}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="mt-1"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="mt-1"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="mt-1"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="mt-1"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
                className="mt-1"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1"
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ExperienceSection;