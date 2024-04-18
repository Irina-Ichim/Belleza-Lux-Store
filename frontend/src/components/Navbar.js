import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para manejar las rutas
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {
  const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  };

  const logoStyles = {
    width: '120px',
  };

  const navLinksStyles = {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
  };

  const iconStyles = {
    marginRight: '-50px',
    color: '#fff', // Cambia el color del icono a blanco
  };

  return (
    <nav style={navbarStyles}>
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="../logo.gif" alt="BellezaLux Logo" style={logoStyles} />
        </Link>
      </div>
      
      {/* Enlaces */}
      <ul className="nav-links" style={navLinksStyles}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/marcas" style={{ color: '#fff', textDecoration: 'none' }}>Marcas de Lujo</Link></li>
        <li><Link to="/cestas" style={{ color: '#fff', textDecoration: 'none' }}>Cestas de Regalo</Link></li>
        <li><Link to="/blog" style={{ color: '#fff', textDecoration: 'none' }}>Blog</Link></li>
      </ul>

      {/* Iconos */}
      <div className="icons" style={{ display: 'flex', gap: '10px' }}>
        <Link to="./login" style={iconStyles}>
          <i className="fas fa-user"></i>
        </Link>
        <Link to="/carrito" style={iconStyles}>
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


