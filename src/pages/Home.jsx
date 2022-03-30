import React from "react";
import AboutHome from "../components/AboutHome";
import AdSectionProfile from "../components/AdSectionProfile";
import People from "../components/People";
import PostHome from "../components/PostHome";
import styled from "styled-components";
import CommunityPanel from "../components/CommunityPanel";
import Message from "../components/Message";
import { useState, useEffect } from "react";
import moment from "moment";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log("posts", posts);
  }, [posts]);

  const getPosts = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    const data = await response.json();
    setPosts(data);
  };

  return (
    <>
      <Wrapper>
        <Left>
          <AboutHome />
          <CommunityPanel />
        </Left>
        <Main>
          <PostHome />
          <Message data={posts} />
        </Main>
        <Right>
          <People title="Add to your feed" data={props.data} />
          <AdSectionProfile />
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
