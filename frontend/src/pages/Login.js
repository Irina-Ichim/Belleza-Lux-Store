import React from 'react';
import { Card, CardContent, Typography, TextField, Link } from '@mui/material';
import backgroundImage from '../assets/FondoUsuario.png';
import ButonEnviar from '../components/ButonEnviar';

const Login = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    minHeight: '88vh', 
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    overflow: 'hidden', 
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 0, 229, 0.05)',
    borderRadius: '10px',
    maxWidth: '450px',
    padding: '20px',
    margin: '100px',
    height: '450px',
    backdropFilter: 'blur(10px)', // Efecto glass
    boxShadow: '0 0 20px rgba(255, 0, 229, 0.4)', // Borde con efecto 3D
  };

  const linkStyle = {
    color: 'rgba(255, 0, 229, 0.7)',
    WebkitTextStroke: '1px white', 
    WebkitTextStrokeWidth: '0.5px', 
    textShadow: '0 2px 0 rgba(77, 3, 151, 0.8)', 
    textDecoration: 'none', 
  };

  const inputStyle = {
    '& label.Mui-focused': {
      color: 'rgba(255, 0, 229, 0.2)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 0, 229, 0.7)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 0, 229, 0.7)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255, 0, 229, 0.7)',
      },
    },
  }
  return (
    <div style={containerStyle}>
      <Card sx={cardStyle}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom style={linkStyle}>
            Iniciar Sesión
          </Typography>
          <form>
            <TextField sx={inputStyle} fullWidth margin="normal" label="Usuario" variant="outlined" />
            <TextField sx={inputStyle} fullWidth margin="normal" label="Contraseña" type="password" variant="outlined" />
            <ButonEnviar>Enviar</ButonEnviar>
          </form>
          <Typography align="center" sx={{ marginTop: '20px' }}>
            <Link href="#" style={linkStyle}>¿Contraseña olvidada?</Link>
          </Typography>
          <Typography align="center">
            <Link href="#" style={linkStyle}>¿Registrarse?</Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;





