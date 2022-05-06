import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import "./expstyle.css";
import { useState } from "react";
import moment from "moment";

const SingleExperience = (props) => {
  const [show, setShow] = useState(false);
  const [experience, setExperience] = useState("");
  const [selectedExpId, setSelectedExpId] = useState();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState("");
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    fetchExpById(props.data._id);
    setSelectedExpId(props.data._id);
  };

  const fetchExpById = async (_id) => {
    let response = await fetch(
      "https://linkedin-backend-01.herokuapp.com/profile/6270f5980270f1272fff0340/experiences/" +
        _id,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    setExperience(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("here");
    const experience = {
      role: role,
      company: company,
      startDate: startDate,
      endDate: endDate || null,
      description: description,
      area: area,
      image: image,
    };
  };

  const handleChange = async () => {
    changeExpById(selectedExpId, "PUT");
    handleClose();
    fetchExperiences("6270f5980270f1272fff0340");
  };

  const fetchExperiences = async (id) => {
    console.log("isssd:", props.data._id);
    try {
      const response = await fetch(
        "https://linkedin-backend-01.herokuapp.com/profile/" +
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
      setExperience(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (method) => {
    changeExpById(selectedExpId, method);
  };

  const changeExpById = async (_id, method) => {
    console.log("_id", _id);
    try {
      let response = await fetch(
        "https://linkedin-backend-01.herokuapp.com/profile/6270f5980270f1272fff0340/experiences/" +
          _id,
        {
          method: method,
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
          },
        }
      );
      if (response.ok) {
        console.log("id:", _id);
        props.getExp();
        handleClose();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    setImage(file);
    submitPicture(props.data._id);
  };

  const submitPicture = async (_id) => {
    const data = new FormData();
    data.append("expImage", image);
    let res = await fetch(
      "https://linkedin-backend-01.herokuapp.com/profile/6270f5980270f1272fff0340/experiences/" +
        _id +
        "/picture",
      {
        method: "PUT",
        body: data,
      }
    );
    let resData = await res.json();
    if (resData.ok) {
      props.getExp();
    } else {
    }
  };

  return (
    <>
      <Container className="mt-4">
        <Row className="mt-3">
          <Col md={2}>
            <img src={props.data.image} alt="" />
          </Col>
          <Col md={4} id="text-col">
            <h6 onClick={handleShow} style={{ cursor: "pointer" }}>
              {props.data.role}
            </h6>
            <span>{props.data.company}</span>
            <p>
              {moment(props.data.startDate).format("MMMM YYYY")} -
              {moment(props.data.endDate).format(" MMMM YYYY - ")}
              {props.data.area}
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
                onChange={(e) =>
                  setExperience({ ...experience, role: e.target.value })
                }
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
                onChange={(e) =>
                  setExperience({ ...experience, company: e.target.value })
                }
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
                onChange={(e) =>
                  setExperience({ ...experience, area: e.target.value })
                }
                required
                className="mt-1"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={moment(experience.startDate).format("yyyy-MM-DD")}
                onChange={(e) =>
                  setExperience({ ...experience, startDate: e.target.value })
                }
                required
                className="mt-1"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={moment(experience.endDate).format("yyyy-MM-DD")}
                onChange={(e) =>
                  setExperience({ ...experience, endDate: e.target.value })
                }
                className="mt-1"
              />
            </Form.Group>

            <Form.Group id="formData">
              <Form.Label>Choose your Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1"
              />
            </Form.Group>

            <Button
              variant="danger"
              type="button"
              onClick={() => {
                handleDelete("DELETE");
              }}
            >
              Delete
            </Button>
            <Button
              variant="success"
              className="mx-2"
              type="button"
              onClick={() => {
                handleChange("PUT");
                if (image) {
                  submitPicture(props.data._id);
                }
              }}
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleExperience;
