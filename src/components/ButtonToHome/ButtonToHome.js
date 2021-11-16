import React from 'react';
import { NavLink } from 'react-router-dom';
import './ButtonToHome.scss';

const ButtonToHome = () => {
  return (
    <NavLink className="home-btn" exact to="/">
      back home
    </NavLink>
  );
};

export default ButtonToHome;
