import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
// PR
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
