import React from 'react';
// burgerLogo will receive the path of the image
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = props => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="hamburger logo"/>
  </div>
);

export default logo;