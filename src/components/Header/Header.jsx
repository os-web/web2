import React from 'react';
import classes from'./Header.module.css';

function Header() {
    return <header className={classes.header}>
    <img src="https://s2.logaster.com/static/v3/img/products/logo.png" className={classes.logo} alt="logo" /> 
  </header>
  ;
}

export default Header;