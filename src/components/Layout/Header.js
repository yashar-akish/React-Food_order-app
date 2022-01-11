import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header =(props)=>{
  return(
    <React.Fragment>
      <header className={classes.header}>
        <h1>Enjoy Eating</h1>
        <button>Card</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='enjoy eating'/>
      </div>
    </React.Fragment>
  )
}

export default Header;