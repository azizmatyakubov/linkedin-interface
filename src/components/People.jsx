import React from "react";
import styled from "styled-components";
import SingleUser from "./singleUser/SingleUser";

const People = (props) => {
  return (
    <Wrapper>
      <HeaderText>{props.title}</HeaderText>
      {props.data &&
        props.data.map((user) => {
          return <SingleUser key={user.id} data={user} />;
        })}
    </Wrapper>
  );
};

export default People;

const Wrapper = styled.div`
  padding: 1rem 1rem;
  min-height: 10rem;
  border-radius: 6px;
  margin-top: 1rem;
  border: 1px solid #e6e6e6;
  background-color: white;

  margin-bottom: 1rem;
  border-radius: 8px;
  max-height: 30rem;
  overflow: hidden;
`;

const HeaderText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #363636;
  margin-bottom: 1rem;
`;
