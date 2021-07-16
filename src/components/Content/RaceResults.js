import React, { useState, useEffect } from 'react';
import classes from './RaceResults.module.css';
import RaceTile from './RaceTile';
import { useSelector } from 'react-redux';
import Search from '../Filter/Search';

const RaceResults = (props) => {
  const [raceData, setRaceData] = useState([])
  const selectedYear = useSelector(state => state.selectedYear);
  const raceDataResults = useSelector(state => state.raceData).filter(race => race.selectedYear === selectedYear)[0].raceData;

  const [searchTerm, setSearchTerm] = useState('');
  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    if (searchTerm !== '') {
      setRaceData(raceDataResults.filter(race => race.raceName.toLowerCase().includes(searchTerm.toLowerCase())));
    } else {
      setRaceData(raceDataResults);
    }
  }, [searchTerm, raceDataResults, selectedYear]);

  return (
    <div>
      <div className={classes.header}>
        <h2>Race Details</h2>
        <Search
          placeholder="Search by Grand Prix"
          value={searchTerm}
          onChange={searchChangeHandler}
        />
      </div>
      <div className={classes.raceDetailsContainer}>
        {raceData.map(race => {
          return (<div key={race.round} className={classes.raceContainer}>
            <RaceTile circuit={race.Circuit} results={race.Results} date={race.date} raceName={race.raceName} round={race.round} />
          </div>)
        })
        }
      </div>
    </div>
  )
}

export default RaceResults;