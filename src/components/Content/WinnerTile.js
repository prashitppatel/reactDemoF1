import React from 'react';
import classes from './WinnerTile.module.css';
import { useSelector } from 'react-redux';

const WinnerTile = (props) => {
  const selectedYear = useSelector(state => state.selectedYear);
  const seasonData = useSelector(state => state.seasonData);
  const selectedSeasonWinner = seasonData.filter(season => season.selectedYear === selectedYear)[0].winner;

  let backgroundColor = '#3f3f3f';
  if (selectedSeasonWinner.Driver.givenName === props.givenName && selectedSeasonWinner.Driver.familyName === props.familyName) {
    backgroundColor = 'rgb(255,30,2)';
  }
  return (
    <div className={classes.winnerRow} style={{ backgroundColor: backgroundColor }}>
      <h2>{props.position}.</h2>
      <div className={classes.driver}>
        <h1>{props.givenName} {props.familyName}</h1>
        <div className={classes.constructor}>{props.constructorName}</div>
      </div>
      <div className={classes.timingContainer}>
        <div className={classes.timingTile}>{props.time}</div>
      </div>
    </div>
  )
}

export default WinnerTile;