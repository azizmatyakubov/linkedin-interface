import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import "./expstyle.css";
import { useState } from "react";
import format from "date-fns/format";

//i can't write on the exp modal

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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
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
    fetchExperiences("6242131ed339840015c883bb");
  };

  const fetchExperiences = async (id) => {
    const response = await fetch(
      "https://linkedin-backend-01.herokuapp.com/profile/" +
        "6270f5980270f1272fff0340" +
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
  };
  const handleDelete = async () => {
    changeExpById(selectedExpId, "DELETE");
  };

  // const experienceExample = {
  //   role: "bricklayer",
  //   company: "Strive",
  //   startDate: "2019-06-16T22:00:00.000+00:00",
  //   endDate: "2019-06-16T22:00:00.000+00:00",
  //   description: "teaching some boring stuff",
  //   area: "germany",
  //   image:
  //     "https://res.cloudinary.com/dar1jmjxk/image/upload/v1651583777/profile_…",
  // };

  const changeExpById = async (_id, method) => {
    console.log("expr", experience);
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
      handleClose();
      props.getMyExp();
      fetchExperiences("6270f5980270f1272fff0340");
    } else {
    }
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    setImage(file);
    // submitPicture(props.data._id);
  };

  // const submitPicture = async (_id) => {
  //   console.log(props.data._id);
  //   const data = new FormData();
  //   data.append("experience", image);
  //   let res = await fetch(
  //     "https://linkedin-backend-01.herokuapp.com/profile/6270f5980270f1272fff0340/experiences/" +
  //       _id +
  //       "/picture",
  //     {
  //       method: "PUT",
  //       body: data,
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
  //       },
  //     }
  //   );
  //   let resData = await res.json();
  //   if (resData.ok) {
  //     props.getExp();
  //     console.log("picture uploaded");
  //   } else {
  //     console.log("failed");
  //   }
  // };

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
              {format(new Date(props.data.startDate), "LLLL yyyy")}
              <p>{props.data.area}</p>
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
          <div onSubmit={handleSubmit}>
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
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
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
                value={area}
                onChange={(e) => setArea(e.target.value)}
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

            <Form.Group id="formData">
              <Form.Label>Choose your Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1"
              />
            </Form.Group>

            <Button variant="danger" type="button" onClick={handleDelete}>
              Delete
            </Button>
            <Button
              variant="success"
              className="mx-2"
              type="submit"
              onClick={() => {
                handleChange();
                // if (image) {
                //   submitPicture(props.data._id);
                // }
              }}
            >
              Add
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleExperience;
