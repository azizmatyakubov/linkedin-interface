import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import "./expstyle.css";
import { useState } from "react";

const SingleExperience = (props) => {
  console.log("THIS IS PROPS", props);
  console.log("THIS IS ID", props.data._id);

  const [show, setShow] = useState(false);
  const [experience, setExperience] = useState("");
  const [selectedExpId, setSelectedExpId] = useState();

  const handleClose = () => setShow(false);

  //I RETRIEVED THE ID BUT IT DOESNT WORK WHEN I PASS IT INTO
  // handleSHow as a parameter

  const handleShow = () => {
    console.log(props.data._id, "this is exp id");
    setShow(true);
    fetchExpById(props.data._id);
    setSelectedExpId(props.data._id) 
  };

  const fetchExpById = async (_id) => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/6242131ed339840015c883bb/experiences/"  + _id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    let data = await response.json();
    console.log("THIS IS DATA", data);
    setExperience(data)
   
  };



  const handleChange = async () => {
    changeExpById(selectedExpId, "PUT");
    handleClose();
    fetchExperiences("6242131ed339840015c883bb")
  }
  

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






  const handleDelete = async () => {
    changeExpById(selectedExpId, "DELETE");
  }


const changeExpById = async (_id, method) => {
console.log("this is changeExpID",_id)
  let response = fetch (
    "https://striveschool-api.herokuapp.com/api/profile/6242131ed339840015c883bb/experiences/"  + _id,
    {
      method: method,
      body: JSON.stringify(experience),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
      },
    }
  )
  if (response.ok) {
    props.getExp()
    handleClose();
  }
}
 

  return (
    <>
      <Container className="mt-4">
        <Row className="mt-3">
          <Col md={2}>
            <img src={props.data.image} alt="" />
          </Col>
          <Col md={4} id="text-col">
            <h6
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              {props.data.role}
            </h6>
            <span>{props.data.company}</span>
            <p>
              {props.data.startDate} - {props.data.endDate} - {props.data.area}
            </p>
          </Col>
        </Row>
        <hr className="style-hr" />
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Role"
                value={experience.role}
                onChange={(e) => setExperience({...experience, role: e.target.value})} 
                required 
                className="mt-1"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company"
                value={experience.company}
                onChange={(e) => setExperience({...experience, company: e.target.value})} 
                required 
                className="mt-1"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                value={experience.area}
                onChange={(e) => setExperience({...experience, area: e.target.value})} 
                required 
                className="mt-1"
              />
            </Form.Group>

            <Button variant="danger" type="button" onClick={handleDelete} >
              Delete
            </Button>
            <Button
              variant="success"
              className="mx-2"
              type="button"
              onClick={handleChange} >
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleExperience;
