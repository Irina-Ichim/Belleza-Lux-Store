import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />  {/* Render the navbar outside of Routes */}
        <Routes>
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
