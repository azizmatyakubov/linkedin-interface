import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './components/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Profile />
      <BrowserRouter>
     <Navbar />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
