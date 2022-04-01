import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <div class="err">4</div>
        <i class="far fa-question-circle fa-spin"></i>
        <div class="err2">4</div>
      </div>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .err {
    color: #000000;
    font-family: "Nunito Sans", sans-serif;
    font-size: 11rem;
    position: absolute;
    left: 20%;
    top: 18%;
  }

  .far {
    position: absolute;
    font-size: 8.5rem;
    left: 42%;
    top: 28%;
    color: #000000;
  }

  .err2 {
    color: #000000;
    font-family: "Nunito Sans", sans-serif;
    font-size: 11rem;
    position: absolute;
    left: 68%;
    top: 18%;
  }

  .msg {
    text-align: center;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.6rem;
    position: absolute;
    left: 16%;
    top: 45%;
    width: 75%;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
  }
`;
