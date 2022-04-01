import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import styled from "styled-components";
import "./MyJumbotron.css";
import MyModal from "../MyModal";

const MyJumbotron = (props) => {
  const [show, setShow] = useState(false); // this is for showing Modal

  const [image, setImage] = useState(null);
  const [showImg, setShowImg] = useState(false);

  const handleShowImg = () => setShowImg(true);
  const handleCloseImg = () => setShowImg(false);

  const handleSHow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [profileDetails, setProfileDetails] = useState({
    profileName: props.me.name,
    surname: props.me.surname,
    email: props.me.email,
    bio: props.me.bio,
    title: props.me.title,
    area: props.me.area,
    images: props.me.images,
  });

  const handleChangeProfile = () => {
    handleSHow();
  };

  const updateProfile = () => {
    updateProfileDetails();
    props.getMe();
    handleClose();
  };

  const body = {
    name: profileDetails.profileName,
    surname: profileDetails.surname,
    email: profileDetails.email,
    bio: profileDetails.bio,
    title: profileDetails.title,
    area: profileDetails.area,
    image: profileDetails.image,
  };

  const updateProfileDetails = async () => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/6242131ed339840015c883bb",
      {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    if (res.ok) {
      alert("updated");
    }
  };

  const uploadImage = async () => {
    try {
      const data = new FormData();
      data.append("profile", image);
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/6242131ed339840015c883bb/picture",
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
        props.getMe();
        handleCloseImg();
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
      <Wrapper className="border-round-pill">
        <Header></Header>
        <AvatarLogo>
          <img
            className="jumbotron-img"
            src={props.me.image}
            alt="avatar"
            onClick={setShowImg}
          />
        </AvatarLogo>
        <Body>
          <Container className="jumbotron-container">
            <Row>
              <Col md={8}>
                <div className="jumbotron-body">
                  <h3>
                    {props.me.name} {props.me.surname}
                    <span className="text-muted">(Him/He)</span>
                  </h3>
                  <p>{props.me.title}</p>
                  <p>
                    <span className="text-muted">{props.me.area}</span>
                    <b>
                      <a href="asd#" target="_blank" className="ml-2">
                        Contact Info
                      </a>
                    </b>
                  </p>

                  <p className="my-2">
                    <b>
                      <a href="asd#" target="_blank">
                        100 Connections
                      </a>
                    </b>
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <p className="edit-profile" onClick={handleChangeProfile}>
                  Edit
                </p>
                <h6>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h6>
                <p>Facilis odit mollitia aliquam harum corporis quibusdam</p>
              </Col>
            </Row>
            <ButtonsClick>
              <button className="jumbotron-btn mr-2  rounded-pill bg-primary text-white text-center px-4 py-2">
                Open to
              </button>
              <button className="jumbotron-btn  mr-2 rounded-pill bg-light border-primary text-primary text-center px-4">
                Add profile section
              </button>
              <button className="jumbotron-btn mr-2 rounded-pill text-center px-4">
                More
              </button>
            </ButtonsClick>
          </Container>
          <Container className="mt-3">
            <Row>
              <Col md={6}>
                <div className="jumbotron-footer-left">
                  <p>
                    <strong> Lorem ipsum dolor</strong> sit amet consectetur
                    adipisicing elit.
                  </p>
                  <b>
                    <a href="asd#" target="_blank" className="">
                      See all details
                    </a>
                  </b>
                </div>
              </Col>

              <Col md={6}>
                <div className="jumbotron-footer-right">
                  <p>
                    <strong> Lorem ipsum dolor</strong> sit amet consectetur
                    adipisicing elit.
                  </p>
                  <b className="mt-2">
                    <a href="asd#" target="_blank" className="">
                      Get started
                    </a>
                  </b>
                </div>
              </Col>
            </Row>
          </Container>
        </Body>
      </Wrapper>

      {/* Changing title  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* NAME  */}
            <Form.Group>
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write here"
                className="mt-1"
                required
                value={profileDetails.profileName}
                onChange={(e) =>
                  setProfileDetails({
                    ...profileDetails,
                    profileName: e.target.value,
                  })
                }
              />
            </Form.Group>
            {/* SURNAME  */}
            <Form.Group>
              <Form.Label>Your surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write here"
                className="mt-1"
                required
                value={profileDetails.surname}
                onChange={(e) =>
                  setProfileDetails({
                    ...profileDetails,
                    surname: e.target.value,
                  })
                }
              />
            </Form.Group>
            {/* EMAIL  */}
            <Form.Group>
              <Form.Label>Your email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Write here"
                className="mt-1"
                required
                value={profileDetails.email}
                onChange={(e) =>
                  setProfileDetails({
                    ...profileDetails,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>
            {/* BIO  */}
            <Form.Group>
              <Form.Label>Your bio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write here"
                className="mt-1"
                required
                value={profileDetails.bio}
                onChange={(e) =>
                  setProfileDetails({ ...profileDetails, bio: e.target.value })
                }
              />
            </Form.Group>
            {/* TITLE  */}
            <Form.Group>
              <Form.Label>Your title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write here"
                className="mt-1"
                required
                value={profileDetails.title}
                onChange={(e) =>
                  setProfileDetails({
                    ...profileDetails,
                    title: e.target.value,
                  })
                }
              />
            </Form.Group>
            {/* AREA  */}
            <Form.Group>
              <Form.Label>Your area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write here"
                className="mt-1"
                required
                value={profileDetails.area}
                onChange={(e) =>
                  setProfileDetails({ ...profileDetails, area: e.target.value })
                }
              />
            </Form.Group>
            {/* IMAGE  */}
            <Form.Group>
              <Form.Label>Your image</Form.Label>
              <Form.Control
                type="url"
                placeholder="Write here"
                className="mt-1"
                required
                value={profileDetails.image}
                onChange={(e) =>
                  setProfileDetails({
                    ...profileDetails,
                    image: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Button
              variant="success"
              type="button"
              onClick={updateProfile}
              className="mr-2"
            >
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Change profile image  */}
      <Modal show={showImg} onHide={handleCloseImg}>
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
          <Button variant="secondary" onClick={handleCloseImg}>
            Close
          </Button>
          <Button variant="primary" onClick={uploadImage}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyJumbotron;

const Wrapper = styled.div`
  position: relative;
  min-height: 65vh;
  background-color: rgb(255, 255, 255);
  border: 1px solid #e6e6e6;
  border-radius: 15px;
  overflow: hidden;
  padding-bottom: 2rem;
`;

const Header = styled.div`
  min-height: 10rem;
  background-color: blue;
  background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIRDw8PDxISEQ8PDw8PDw8PERERDw8PGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDtAPy40NTEBDAwMEA8PGA8RGjEdGB00NDQxNDExMTE0NDE0ND80NDE0NDQxMTQ0PzE/PzQxNDQ0ND8/MTQ0NDExMTQxMTExMf/AABEIAIgBcgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACBAABAwUGB//EADEQAAIBAgIJAwMEAwEAAAAAAAABAgMTElEEBREUFVJhkaFTcZIh0fAxYoGxFkKyQf/EABsBAQEBAQEBAQEAAAAAAAAAAAEAAgMFBgQH/8QAMREAAgECBAQFAQgDAAAAAAAAAAESERMCAxVRBBRSoQVTYZHRsSExQkOBkuHwBkHx/9oADAMBAAIRAxEAPwDhKASgbKISifRHyTxmSgEoGsYGkaRVCrf3GCgWoDUaJrGgEkNvExJQDjTY9GgaxohM2sliEaIcdHH1RNI0QuG1kI58dHNI0DoKkEqRm4bsoRjRDVEeVIJUgmatoRVENUR1Ug1SMzNQElRCVEdVIJUgmMBJUg1THFTLVIJDEUVMJUxpUwlSCQxFFTLVMcVIJUgkURO2WqY6qRapFIYiVsu0OqkXaCQwErZLY8qRdopFAStFqkO2i7YTGAjaLtD1ou0UygI2SWR22S0UigJWS7I9aKtBMYCVklkdtF2imUBG0S0O2iWykUBKyVaHrZLYSKAhaKdI6Fsq0UigIWix60QplbPAQoG0aA3GkjeFI/Q8w/JhyEJRom0aA5GkaRpmbh2WUhONE1jRG40w40zMzayxRUQ40htUg1TMzNQQrGkEqQ2qYSpBMYCiphqkNqmEqYTGAqqYSpjaphKkEygKKmEqY4qYSpBM1ATVIJUhxUwlTCZQE1RCVEbVMJUymMBRUglTGlTDVMzMYCiplqmNqkEqRTGAmqZapjipFqkE0UBRUy7Q3bLVMLgwFLRdsbtl2yuDEUtktjlsu2EyiJ2yWxy2XbC4URK2XbHLZLZXBgJ2yWx22S2VwoCVslsdtF2iuFARtEtD1ou0FwoiFoloetl2iuFEQtEtD1slsLgxELZB62QrhRPCxorJGsaSyDWw1jsN3TnaM40zSMDRRNEgumrTMlTNI0zSKCSM3TVpmagHGmapBpBdGyzJUwo0zVBJBdNWjNUw1TNEgkgujaAUAlANINRC6NozUQlE0UQlEzdG0ZqASiaqISiF0rRkoFqBskWoldG0ZKISgaqJeEzdG0ZKBagbKJeEro2jHAFgNdhNhm8Noywl4DXCWoBeGyZYSYDZQLUAvFaMcJeA3US1AbpWzDAWqYxhJsK6Nswtl2jfYUF1FbMbZeA1L+hXUVszwFWzX6E+hXUVsywkwmm1FYkV5DbM8BeEPEisSM3luVsDAVgNMRW1FeRWwMBA9qLC8htnz6OwNHNjpEuZG0dJzfY/R9o20PRns/Vm0aizOfHSPc2jWMs0sqo/FoNCUawSqnN4mdFkjyYaYiqoaqmHiY2B1MOLElVNI1TLxs1YHEwkxSNUNVjNxjZQ2mGhRVg1WMvMZrlxpMJMUVYK+ZeaxsDikEpCN8m8GXmsbA+pkxiG8FXzDz2Ng6Nwlw528FbycsXFUGx6HTvF3Dlb0Tejk+NSKwzrKoXcOTvRe9GeeQWGdZVAlNHIWlF70HOoLDOvjJdOStKL3oOeQWGda4VdOUtKRe9oueQWGdW4VcOZvRN6WYc8FlnUukuHL3pZk3pZlzw2WdO6C6pzd7WZHpaM88/UbD2OleKunN3tFb2g55+pWXsdO6VcOZviK3xGedxbMbD2OncI6py3piKemoOcxbMbD2OpeBdU5b00j00ubx7MeXex1LxZyd8IXNZmzGw9j5pHWMeV9zaOsoZPwcdanllLyEtSz5Zdj+g8tl/1nzS8Rxr/AIdyOsodTaOsIZs8+tRz5WFwGrl/Rh8Hl79zqvFMa/D2Z6OOsIZ+UaR1hDPyjzP+P1eT+i/8fq8q7xMPgsvqOi8Vx9H1PUR0+HN5RotPhn5R5L/H6vJ5iR6kqr/T/kOQy3+IdXx+X9fg9etPhzeUEtPjzLujxj1TNf6P+FtItVT9OXxf2B+G4Or6fIa01+X9fg9stYw513Ra1pD1I/JHiVqufpz+D+xfDZ+nU+L+waZl9X0HXMS/K7v4PbLWkPUj8o/cOOsoc8fkjw/Dpck/i/sTcHyT+LDSsvr7ItfxeV3fwe8Wnw5490GtPhzrujwK0H9kviw4aAn/AKv4szpODr7Cv8gxeT3fwe8WnR5l8ib7Hmj3R4mGq9v/AI/izWOqF17GH4Rl9b9kbXj2Z5K/d/B7HfY8y7om+Q513PJR1MvxGkdTL82mH4Rk9b9ja8czfIX7v4PUS0yC/WaXvJAb9T9SPyR56Op1+YjSOpo9PJjRsjr7GtbzfJXv/B6HeI8wMtNgv1ml7vYcRanXTswlqddOzMaNkdXYdazPKXuzr7/T9SPdFcQp+rH5HMWpvbsy1qX27Mn4Nw3U/ZFrWb5S92dLiFL1I/Im/wBP1I9znrUj6dmWtSPp2YaNwvU+w6zneUvdnQ36l6se5e/U/Vj3OfwSWcfJXBJZodG4XqYazneUvdnR32n6i8lrToeojnLUk80EtSS6eRXhHCr8T7FrGd5S92dBabD1F3L36n6iOfwWXQnBpft7s1pPC7mdXz/LXceen0+cj1jS5/8AoR4PPoVwieSNLwvhDOrcR0IdesqfM+zAetKWb7MV4VLInCJ8ppeGcIv9GdV4rZewzxWn1K4rT6+Rdaomv0iThM+Xwa03hdg1Xitl7G/FqfXsyuLUuvZmPCKnI+xXB58j7Fp3C7FqvF7L2GOK08/DLetKXN4YrwmpyvsVwifK+xadwv8AaGtW4rZewzxalzP4y2f0FxSlz+H9hPhE+V9iuDzyfxLTuG3ZavxPSu/yO8Upc3iX2IJcInk/iWWn8Nu/7+g6vxPSu/yc+Kefg3gvzYKQlLM1hOWZ6DR42HENxiaRiLQlLM1jKWZmh1TGIxNFAXjKWYacjFDaNlE0UDBOQUcRmg1GYwCSFkpBqMjNPUajKigsKFlCQahIKeo1NsCzRViOa7IBQZpGmyr6j+gO6w5ibpDmXk0jTYapBJ7lH0MVokM15CWjQzXk3VMJUim9xj6GFiHMvJapR5l5GLXsRUQn6jH0MVTjzLyEqa5ka2EWqCCfqMHsZKCzQaj1RoqCC3dBJDBmezqifyjWwglRQSQwZhi9iYn+03VGJaoxyCSKDFnUl+0q5LKI3ajkXajkhmtig9xO7LKJL7yiOWo5Iu3HIprYoPcT3h5RJvTyX5/A5bjkS3HJDJbBDFuI70+Vfn8E3x8qHbSyXkltZIZYdgi9xHfHyk318o9bjkR0o5BLDsMMW5z9+fKVvsuT+x90o5Etx5V2GeHYzHFuc7fp8qKenT5Y+TpYI8qKwLJDPD0lHFuc3famUfJN8n/6l2Z0bK5V2K3dZeCnh2COLcQWmPJB73+0d3ZZeETdY5FPBsMcQjvf7SD26xyIEsGxRxHzmDGIs5kPdjEfd9z0XhPJw5h0YyRvCazOZBm0ZHN4T9GHGdKM0aRmjmxl1NIzMwOixnSVRFqoIRmaRmzLwG5Dyq+4aq9BFSeYSfUzA1IeVXoRVfzaJphphFDIbVVhKo+ncTW3MNe4RRSY4qnVBqp1ElsNE0ZijUmNqYSmKJo0TQRQyGVPqEqnUWjJBqSyM0NVGFU6hKfUwUw1VM0NJm2MJTMFMNTM0NVNlL3LT9zJVC8YDU129C0ZplphQTQtIzxF4kVBNkkX9DFSRakioRpsRexGeMvGVC+w12Ir6GeMmMqFU0J9DLGU5lQqm+xE2dDBzZVwqBVG+zoiuxhjKuFEpIY29StvUwuExjQJG7ZX0MMRHIqFI2+hDDaQqBI+TqoHGZgpBKR7Z860NRqm8KgipGkJg8IrE0dCMzWMznwqfn1NY1DDwnbDmDyqGkajEVUDjUMxOqzB+NQ0jP8ANogqgSqGXhOixj6qBKoJRmGqhmJuQ2pdQ1PqKKp7BqfUImqjSmGqiFFPqEp9TNBqOKoGqokpBKQRGo6qgSmJKYSmZiMh6NQNVRBVC1UMxNSH1VLVURVUJVCiMh5VfzaEqgiqhFV6mYCsZ0Lpd0594JVggMx64S6I3S7pRGQ9eLuiN4u8USkO3C7gjdLU2USkO3fzaXcErjLxhEpDlz2Jc6ieNl42USkNXOpVwWxF4xoVRlTLxi2P3JiCJVGrgLqC+1E2oolU3xkxmONFOaKhVNsfVkMMfQg0Kp8uQSZCHrnisNSCUiEIw0EpBKZCAZNI1PcONUhCaGrX3GsayNI1SEObR0w42EqgaqkIFDqsTCVUtVSyBQ3JhqqGqhCGWjaxMJVOpaqdSEM0N1Yaq9S7pCA0aTLVQtVSyBQalqoEpEIA1CTZeJ5kIFBLxdQlL82EIFBLUglJZkIFCqGpIJNFEMjUJTLxkINCqWp+xeMhAoNS8ZMZCBQql3SrxCCkVSrrJc6kIVCqXjJdIQGiqC6hV1FkGgVBvIhCFQKn/9k=");
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
`;

const Body = styled.div`
  background-color: white;
  margin-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
`;

const AvatarLogo = styled.div`
  position: absolute;
  width: 142px;
  height: 142px;
  border-radius: 50%;
  margin-top: -6rem;
  margin-left: 1.5rem;
  overflow: hidden;
  border: 4 px solid white;
`;

const ButtonsClick = styled.div`
  display: inline-flex;
  margin-right: 4.5rem;
`;
