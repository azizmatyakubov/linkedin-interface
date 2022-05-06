import { Container, Row, Col } from "react-bootstrap";
import "./expstyle.css";
import SingleExperience from "./SingleExperience";
import { useState } from "react";
import { useParams } from "react-router";
import { Modal, Button, Form } from "react-bootstrap";

// 6242131ed339840015c883bb

const ExperienceSection = (props) => {
  const param = useParams();
  const [experiences, setExperiences] = useState(null);
  const [addExperience, setAddExperience] = useState(false);

  const closeAddExperience = () => {
    setAddExperience(false);
    setCompany("");
    setRole("");
    setDescription("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setImage("");
  };
  const showAddExperience = () => setAddExperience(true);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const experience = {
      role: role,
      company: company,
      startDate: startDate,
      endDate: endDate || null,
      description: description,
      area: location,
      image: image,
    };

    try {
      console.log(experience);
      const response = await fetch(
        `https://linkedin-backend-01.herokuapp.com/profile/${
          param.id || "6270f5980270f1272fff0340"
        }/experiences`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        props.fetchProfileById(param.id || "6270f5980270f1272fff0340");
        closeAddExperience();
      } else {
        console.log("fetch failed!!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container id="container-wrapper" className="mt-4 pb-3">
        <Row className="mt-3">
          <Col className="d-flex">
            <h4 className="align-self-end">Experience</h4>
          </Col>

          <Col className="icons-col">
            {/* <img src="/images/plus-icon.svg" alt="" onClick={showAddExperience} /> */}
            <i
              className="bi bi-plus-lg text-muted d-inline-block bg-hover p-3"
              role="button"
              id="addIcon"
              onClick={showAddExperience}
            ></i>

            <i
              className=" bi bi-pencil text-muted bg-hover ml-2 mr-2 p-3"
              role="button"
            ></i>
          </Col>

          {props.data &&
            props.data.map((value) => {
              return (
                <SingleExperience
                  key={value._id}
                  data={value}
                  getMyExp={props.getMyExp}
                  fetchProfileById={props.fetchProfileById}
                />
              );
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
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
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
