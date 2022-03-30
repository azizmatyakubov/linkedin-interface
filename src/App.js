import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from './components/navbar/MyNavbar';
import MyFooter from "./components/footer/MyFooter";
import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ExperienceDetails from './components/experience/ExperienceDetails';

function App() {
  const [profile, setProfile] = useState([]);
  const [myProfile, setMyProfile] = useState({});

  
  // get the id from the url
  const param = useParams();


  // it is like componetDidMount
  useEffect(() => {
    fetchApi();
    fetchMyProfile();
    console.log(myProfile);
  }, []);

  useEffect(() => {
    console.log(myProfile);
  }, [myProfile]);

  // Get people from API and assign to state
  const fetchApi = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyMTMxZWQzMzk4NDAwMTVjODgzYmIiLCJpYXQiOjE2NDg0OTc0MzgsImV4cCI6MTY0OTcwNzAzOH0.sLkbyZFjVCiLvfgrcA9MnJiefoO2BW2iMooxrirJlnU",
        },
      }
    );
    const data = await response.json();
    setProfile(data);
  };

  // Get only profile data from API and assign to state
  const fetchMyProfile = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzOGQyY2MzNjA3MDAwMTVmNmZkMzMiLCJpYXQiOjE2NDg1OTQyMjAsImV4cCI6MTY0OTgwMzgyMH0.VHqhiens_PkTS2JO-8hNQOytWeTf7PkUQsG9GfchqhY",
        },
      }
    );
    const data = await response.json();
    setMyProfile(data);
    // this is the data that we get from the api
  };

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route
            path="/profile/"
            element={<Profile data={profile} me={myProfile} getMe={fetchMyProfile} />}
          />
          <Route
            path="/profile/:id"
            element={<Profile data={profile} me={myProfile} />}
          />

          <Route path="/" element={<Home data={profile} me={myProfile} />} />
          <Route
            path="/post/:id"
            element={<Home data={profile} me={myProfile} />}
          />

          
          <Route path="/experience-details" element={<ExperienceDetails />} />

        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
