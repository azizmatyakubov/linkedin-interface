import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/navbar/MyNavbar";
import MyFooter from "./components/footer/MyFooter";
import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import NotFound from "./components/NotFound";

function App() {
  const [profile, setProfile] = useState([]);
  const [myProfile, setMyProfile] = useState({});

  // it is like componetDidMount
  useEffect(() => {
    fetchApi();
    fetchMyProfile();
  }, []);

  // Get people from API and assign to state
  const fetchApi = async () => {
    const response = await fetch(
      "https://linkedin-backend-01.herokuapp.com/profile/"
    );
    const data = await response.json();
    setProfile(data);
  };

  const fetchMyProfile = async () => {
    const response = await fetch(
      "https://linkedin-backend-01.herokuapp.com/profile/6270f5980270f1272fff0340"
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
            element={<Profile data={profile} me={myProfile} />}
          />
          <Route path="/profile/:id" element={<Profile data={profile} />} />

          <Route path="/" element={<Home data={profile} me={myProfile} />} />
          <Route path="/post/:id" element={<Home data={profile} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
