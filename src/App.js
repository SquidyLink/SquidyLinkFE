import './App.css';
import Home from "./pages/Home";
import FacilityLoginPage from "./pages/FacilityLogin";
import ContractorLoginPage from './pages/ContractorLogin';
import FacilityNew from "./pages/FacilityNew";
import ContractorNew from "./pages/ContractorNew";
import BidNew from "./pages/BidNew";
import ProjectNew from "./pages/ProjectNew";
import Projects from "./pages/Projects";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/facility/login" element ={<FacilityLoginPage/>}/>
          <Route path="/contractor/login" element ={<ContractorLoginPage/>}/>
          <Route path="/facility/new" element ={<FacilityNew/>}/>
          <Route path="/contractor/new" element ={<ContractorNew/>}/>
          <Route path="/bid/new" element ={<BidNew/>}/>
          <Route path="/project/new" element ={<ProjectNew/>}/>
          <Route path="/projects" element ={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
