import React from 'react';
import logoImage from '../img/logo.png';

const Logo = ({ className }) => {
  return <img src={logoImage} alt="Logo" className={className} />;
};

export default Logo;