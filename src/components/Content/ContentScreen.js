import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ContentScreen.module.css';
import RaceResults from './RaceResults';

const ContentScreen = (props) => {
  const selectedYear = useSelector(state => state.selectedYear);
  const seasonData = useSelector(state => state.seasonData);
  const selectedSeasonData = seasonData.filter(season => season.selectedYear === selectedYear)[0];

  return (
    <div className={classes.content} >
      <div className={classes.labelContainer}>
        <h1>{selectedYear} Race Results</h1>
        <h3>Total Races - {selectedSeasonData.races}</h3>
      </div>
      <div className={classes.winnerContainer}>
        <h2>World Champion</h2>
        <h4>-</h4>
        <div>
          <h1>{selectedSeasonData.winner.Driver.givenName} {selectedSeasonData.winner.Driver.familyName}</h1>
          <h3>{selectedSeasonData.winner.Constructors[0].name}</h3>
        </div>
      </div>
      <RaceResults />
    </div >
  )
}

export default ContentScreen;