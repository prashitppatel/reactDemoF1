import React from 'react';
import classes from './Header.module.css';
import f1logo from '../../assets/f1logo.png';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img src={f1logo} alt="F1 logo" />
        </div>
        <h1>Formula 1 Winners</h1>
      </header>
    </>
  )
}

export default Header;