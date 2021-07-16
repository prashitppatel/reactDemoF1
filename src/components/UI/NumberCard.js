import React from 'react';
import classes from './NumberCard.module.css';

const NumberCard = (props) => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.label}><h1>{props.title}</h1></div>
      <div className={classes.number}><h1>{props.number}</h1></div>
    </div>
  )
}

export default NumberCard;