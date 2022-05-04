import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function MyModal({ show, setShow }) {
  const [image, setImage] = useState(null);
  const [showImg, setShowImg] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const handleChange = (e) => {
  //     console.log(e);
  //     setImage(e);
  //   };
  const uploadImage = async () => {
    try {
      const data = new FormData();
      data.append("avatar", image);
      const response = await fetch(
        "https://linkedin-backend-01.herokuapp.com/profile/6270f5980270f1272fff0340/uploadAvatar",
        {
          method: "POST",
          body: data,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
          },
        }
      );
      if (response.ok) {
        // setProfilePicture(image);
        console.log("Image Successfully Uploaded");
      } else {
        console.error("Uploading Failed");
      }
    } catch (error) {
      console.error(error);
    }
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <input
              type="text"
              placeholder="upload image url"
              value={image}
              onChange={(e) => handleChange(e.target.value)}
            /> */}
          <Form.Group id="formData">
            <Form.Label> Upload Image </Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={uploadImage}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
