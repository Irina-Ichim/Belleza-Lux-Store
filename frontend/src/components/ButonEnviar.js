import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, ...props }) => {
    const buttonStyle = {
      background: 'radial-gradient(circle, rgba(77,3,151,0.53) 0%, rgba(196,24,179,0.53) 100%)',
      width: '150px',
      height: '53px',
      borderRadius: '25px',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px', // Cambio de margin-top a marginTop
      ...props.style,
    };
  

  const textStyle = {
    color: 'white',
    fontSize: '20px',
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: '53px',
    wordWrap: 'break-word',
    textShadow: '0px 4px 4px rgba(255, 152, 251, 0.68)',
  };
  
  return (
    <Button style={buttonStyle} {...props}>
      <span style={textStyle}>{children}</span>
    </Button>
  );
};

export default CustomButton;
