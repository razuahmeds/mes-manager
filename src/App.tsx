import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import { Register } from './componcnts/Register';

function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
