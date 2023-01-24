import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import DeliveryProvider from './context/DeliveryProvider';

function App() {
  return (
    <DeliveryProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <Register /> } />
        </Routes>
      </BrowserRouter>
    </DeliveryProvider>
  );
}

export default App;
