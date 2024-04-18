import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Elimina la importación de Switch aquí
import '@fortawesome/fontawesome-free/css/all.css';


import Navbar from './components/Navbar'; 


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
    
      </div>
    </Router>
  );
}

export default App;

