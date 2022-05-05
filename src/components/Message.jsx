import React, { useState } from "react";
import styled from "styled-components";
import ReactTimeAgo from "react-time-ago";
import { Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Message = (props) => {
  const [show, setShow] = useState(false); // this is for showing Modal
  const [postText, setPostText] = useState("there should be post text"); // this is for modal
  const [selectedPostId, setSelectedPostId] = useState(); // this is storing selected post id
  const handleClose = () => setShow(false);

  // when user click edit post text, this function runs
  const handleShow = (id) => {
    console.log(id, "this is post id");
    setShow(true); // display modal
    fetchPostById(id);
    setSelectedPostId(id);
    console.log(props.data[0].user);
  };

  // fetch post with id and storing to 'postText' state
  const fetchPostById = async (id) => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/" + id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    let data = await res.json();
    setPostText(data); //setting state
  };

  // there is button on Modal, when it clicks, this function runs
  const handleChange = async () => {
    changePostById(selectedPostId, "PUT"); //selectedPostId is coming from state
  };

  const handleDelete = async () => {
    changePostById(selectedPostId, "DELETE");
  };

  // it will send PUT request to server in order to change POST text
  const changePostById = async (id, method) => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/" + id,
      {
        method: method,
        body: JSON.stringify(postText),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      console.log(method);
      props.getPosts(); // if response is ok, we need to get all posts one more time from server
      handleClose(); // after all operation, we need to close modal
    }
  };

  return (
    <div>
      {props.skeleton && (
        <>
          <Wrapper>
            <Header>
              <img className="skeleton-profile-pic skeleton" alt="skeleton" />
              <div>
                <h6 className="skeleton-name skeleton"> </h6>
                <p className="skeleton-text skeleton"></p>
              </div>
            </Header>
            <Body>
              <p className="skeleton-text mb-2 skeleton"></p>
              <p className="skeleton-text mb-2 skeleton"></p>
              <p className="skeleton-text mb-2 skeleton"></p>

              <div>
                <img
                  className="skeleton skeleton-text mr-2"
                  alt="skeleton-text"
                />
                <p className="skeleton skeleton-text ml-2 mr-2"></p>
                <p className="skeleton skeleton-text"></p>
              </div>
            </Body>

            <Footer>
              <Section>
                <img src="/images/hand-thumbs-up.svg" alt="" srcset="" />
                Like
              </Section>
              <Section>
                <img src="/images/chat-dots.svg" alt="" srcset="" />
                Comment
              </Section>
              <Section>
                <img src="/images/share.svg" alt="" srcset="" />
                Share
              </Section>
              <Section>
                <img src="/images/send.svg" alt="" srcset="" />
                Send
              </Section>
            </Footer>
          </Wrapper>
          <Wrapper>
            <Header>
              <img
                className="skeleton-profile-pic skeleton"
                alt="skeleton-profile"
              />
              <div>
                <h6 className="skeleton-name skeleton"> </h6>
                <p className="skeleton-text skeleton"></p>
              </div>
            </Header>
            <Body>
              <p className="skeleton-text mb-2 skeleton"></p>
              <p className="skeleton-text mb-2 skeleton"></p>
              <p className="skeleton-text mb-2 skeleton"></p>

              <div>
                <img
                  className="skeleton skeleton-text mr-2"
                  alt="skeleton-body"
                />
                <p className="skeleton skeleton-text ml-2 mr-2"></p>
                <p className="skeleton skeleton-text"></p>
              </div>
            </Body>

            <Footer>
              <Section>
                <img src="/images/hand-thumbs-up.svg" alt="" srcset="" />
                Like
              </Section>
              <Section>
                <img src="/images/chat-dots.svg" alt="" srcset="" />
                Comment
              </Section>
              <Section>
                <img src="/images/share.svg" alt="" srcset="" />
                Share
              </Section>
              <Section>
                <img src="/images/send.svg" alt="" srcset="" />
                Send
              </Section>
            </Footer>
          </Wrapper>
        </>
      )}
      {props.data
        .slice(-12) // only showing last 5 posts
        .reverse() // last messages should be on top
        .map((post) => (
          <>
            <Wrapper>
              <Header>
                <img src={post.user.image} alt="img" />
                <div>
                  <h6>
                    <Link to={"/profile/" + post.user._id}>
                      {post.user.name}
                    </Link>
                  </h6>
                  <p>{post.user.title}</p>
                  <p>{<ReactTimeAgo date={post.updatedAt} />}</p>
                </div>
                {/* {post.user._id === "6242131ed339840015c883bb" && ( */}
                <Button
                  variant="outline-dark"
                  onClick={() => handleShow(post._id)}
                >
                  Edit Post
                </Button>
                {/* )} */}
              </Header>
              <Body>
                <p>{post.text}</p>
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/plus--v3.png"
                    alt="blue-background"
                  />
                  <span>129</span>
                  <span>1 comments</span>
                </div>
              </Body>

              <Footer>
                <Section>
                  <img src="/images/hand-thumbs-up.svg" alt="" srcset="" />
                  Like
                </Section>
                <Section>
                  <img src="/images/chat-dots.svg" alt="" srcset="" />
                  Comment
                </Section>
                <Section>
                  <img src="/images/share.svg" alt="" srcset="" />
                  Share
                </Section>
                <Section>
                  <img src="/images/send.svg" alt="" srcset="" />
                  Send
                </Section>
              </Footer>
            </Wrapper>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update post</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Your post</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Company"
                      className="mt-1"
                      value={postText.text}
                      onChange={(e) =>
                        setPostText({ ...postText, text: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    type="button"
                    onClick={handleChange}
                    className="mr-2"
                  >
                    Update
                  </Button>
                  <Button variant="danger" type="button" onClick={handleDelete}>
                    Delete
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </>
        ))}
    </div>
  );
};;

export default Message;

const Wrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  width: 100%;
  min-height: 5rem;
  padding: 1rem 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  div {
    p {
      margin: 0;
      font-size: 12px;
      color: gray;
      margin-bottom: 0;
      margin-top: 0;
    }
    h6 {
      margin: 0;
    }
    margin-right: auto;
  }
`;

const Body = styled.div`
  margin-top: 1rem;
  font-size: 14px;
  font-weight: 400;

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
    }
    span {
      color: gray;
      font-size: 12px;
      font-weight: 400;
      margin-left: 2px;
    }

    span:nth-child(3) {
      margin-left: auto;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e6e6e6;
`;

const Section = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  padding: 0.7rem 0.5rem;
  border-radius: 4px;
  color: gray;
  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #dddddd;
  }
`;
