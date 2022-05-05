import React from "react";
import AboutHome from "../components/AboutHome";
import AdSectionProfile from "../components/AdSectionProfile";
import People from "../components/People";
import PostHome from "../components/PostHome";
import styled from "styled-components";
import CommunityPanel from "../components/CommunityPanel";
import Message from "../components/Message";
import { useState, useEffect } from "react";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [myProfile, setMyProfile] = useState();
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    getPosts();
    getMyProfile("6270f5980270f1272fff0340");
  }, []);

  // get all posts from API and storing Posts state
  const getPosts = async () => {
    const response = await fetch(
      "https://linkedin-backend-01.herokuapp.com/post"
    );
    const data = await response.json();
    setPosts(data);
    setSkeleton(false);
  };

  const getMyProfile = async (id) => {
    try {
      const response = await fetch(
        "https://linkedin-backend-01.herokuapp.com/profile/" + id
      );
      const data = await response.json();
      setMyProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Wrapper>
        <Left>
          <AboutHome data={props.me} />
          <CommunityPanel />
        </Left>
        <Main>
          <PostHome myProfile={myProfile} getPosts={getPosts} />
          <Message data={posts} getPosts={getPosts} skeleton={skeleton} />
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
  background-color: #f3f2ef;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    display: block;
  }

  @media (max-width: 1020px) {
    padding: 0 1rem;
  }
`;
const Left = styled.div`
  width: 14rem;
  min-height: 10rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin: auto;
    width: 100%;
  }
`;
const Main = styled.div`
  width: 10rem;
  min-height: 10rem;
  flex-grow: 1;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 20rem;
  min-height: 10rem;

  @media (max-width: 768px) {
    width: 100%;
    display: none;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: none;
  }
`;
