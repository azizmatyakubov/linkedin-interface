import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const EditSectionProfile = () => {
  return (
    <Wrapper>
      <a href="/">
        <div className="d-flex">
          <P>Edit public profile URL</P>
          <BsFillQuestionCircleFill />
        </div>
      </a>
      <hr />
      <a href="/">
        <div className="d-flex mt-3">
          <P>Add profile in another language</P>
          <BsFillQuestionCircleFill />
        </div>
      </a>
    </Wrapper>
  );
};

export default EditSectionProfile;

const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  padding: 1rem;
  max-height: 7rem;
  border-radius: 8px;
  background-color: white;
  font-weight: 400;

  a {
    text-decoration: none;
    color: gray;
  }

  P:hover {
    text-decoration: underline;
  }

  hr {
    margin: 0;
  }
`;

const P = styled.p`
  flex-grow: 1;
`;
