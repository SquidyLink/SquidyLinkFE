import './App.css';
import LoginPage from "./pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    
    <BrowserRouter>

      <Routes>
        <Route path="/login" element ={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>

    
  );
}

export default App;
