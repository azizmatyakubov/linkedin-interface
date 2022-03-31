import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

const PostHome = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState(null);

  // when you write anything on post and press Enter, this function runs
  const _handleSubmit = async (e) => {
    if (e.key === "Enter") {
      // checking: if users press Enter, function will send POST request
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts/",
          {
            method: "POST",
            body: JSON.stringify({
              text: inputValue, // inputValue from state
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
            },
          }
        );
        if (response.ok) {
          console.log(JSON.stringify(response.body));
          props.getPosts(); // if we send POST reqeust successfully, we need to get all posts one more time
          setInputValue(""); // Clearing input value
        } else {
          console.log("fetch failed");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleFile = (e) => {
    console.log(e.target.files);
    let file = e.target.files[0];
    setImage(file);
  };

  const submit = async () => {
    const data = new FormData();
    data.append("post", image);
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/62458b0aec507a0015740d18",
      {
        method: "POST",
        body: data,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    let resData = await res.json();
    if (resData.ok) {
      console.log("picture uploaded");
    } else {
      console.log("failed");
    }
  };

  return (
    <>
      <Wrapper>
        <Header>
          <img
            src="https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg"
            alt="profile-avatar"
          />
          <Input
            type="text"
            placeholder="Start post"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)} // whem users type something, this function setState
            onKeyPress={_handleSubmit}
          />
          <input type="file" onChange={(e) => handleFile(e)} />
        </Header>
        <Footer>
          <Section>
            <img src="/images/photo-home.png" alt="photo" />
            Photo
          </Section>
          <Section>
            <img
              src="https://img.icons8.com/color/48/000000/icons8-new-logo.png"
              alt="video"
            />
            Video
          </Section>
          <Section>
            <img
              src="https://img.icons8.com/color/48/000000/clock--v4.png"
              alt="event"
            />
            Event
          </Section>
          <Section>
            <img
              src="https://img.icons8.com/color/48/000000/scroll.png"
              alt="article"
            />
            Write article
          </Section>
        </Footer>
      </Wrapper>
      <Modal></Modal>
    </>
  );
};

export default PostHome;

const Wrapper = styled.div`
  padding: 1rem 1rem;
  min-height: 5rem;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  background-color: white;
  margin-bottom: 1rem;
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
`;

const Input = styled.input`
  flex-grow: 1;
  height: 100%;
  border-radius: 25px;
  border: 1px solid #adadad;
  padding: 0 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 100%;
  margin-top: 1rem;
`;

const Section = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  padding: 0.7rem 0.5rem;
  border-radius: 4px;

  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #dddddd;
  }
`;
