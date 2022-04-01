import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/navbar/MyNavbar";
import MyNetwork from "./components/MyNetwork";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <MyNetwork />
        <Routes>
          <Route path="/mynetwork" element={<MyNetwork />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
