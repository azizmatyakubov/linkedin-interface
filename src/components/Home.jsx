import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import AboutHome from "./AboutHome";
import AdSectionProfile from "./AdSectionProfile";
import People from "./People";
import PostHome from "./PostHome";
import styled from "styled-components";

const Home = (props) => {
  return (
    <>
      <Wrapper>
        <Left>
          <AboutHome />
        </Left>
        <Main>
          <PostHome />
        </Main>
        <Right>
          <People title="Add to your feed" data={props.data} />
        </Right>
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  padding: 0rem 6.5rem;
`;
const Left = styled.div`
  width: 14rem;
  min-height: 10rem;
  margin-right: 2rem;
`;
const Main = styled.div`
  width: 10rem;
  min-height: 10rem;
  flex-grow: 1;
  margin-right: 2rem;
`;
const Right = styled.div`
  width: 20rem;
  min-height: 10rem;
`;
