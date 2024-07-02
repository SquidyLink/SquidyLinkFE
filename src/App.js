import './App.css';
import Home from "./pages/Home";
import FacilityLoginPage from "./pages/FacilityLogin";
import FacilityNew from "./pages/FacilityNew";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/facility/login" element ={<FacilityLoginPage/>}/>
          <Route path="/facility/new" element ={<FacilityNew/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
