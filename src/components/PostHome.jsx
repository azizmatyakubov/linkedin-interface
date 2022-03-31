import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";

const PostHome = (props) => {
  const [inputValue, setInputValue] = useState("");

  // when you write anything on post and press Enter, this function runs
  const _handleSubmit = async (e) => {
    submit();
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

  const form = {
    post: "data:image/jpeg;base64,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",
  };

  const submit = async () => {
    const data = new FormData(form.current);
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/62458b0aec507a0015740d18",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "multipart/form-data",
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
