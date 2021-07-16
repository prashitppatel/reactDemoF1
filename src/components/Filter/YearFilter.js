import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { f1DataActions } from '../../store/index';
import classes from './YearFilter.module.css';

import { getSeasonWinners, getRaceData } from '../../data/getApiData';

const YearFilter = (props) => {
  const dispatch = useDispatch()
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    let yearsArray = [];
    let startYear = 2005;
    while (startYear <= currentYear) {
      yearsArray.push(startYear++);
    }
    setYears(yearsArray);
  }, []);

  const selectedYearHandler = async (selectedYear) => {
    dispatch(f1DataActions.setDataLoaded(false));
    dispatch(f1DataActions.setFilter(selectedYear));

    const seasonDataResponse = await getSeasonWinners(selectedYear);
    const seasonData = {
      selectedYear: selectedYear,
      races: seasonDataResponse.round,
      winner: seasonDataResponse.DriverStandings[0]
    }
    dispatch(f1DataActions.setSeasonData(seasonData));

    const raceDataResponse = await getRaceData(selectedYear);
    const raceData = {
      selectedYear: selectedYear,
      raceData: raceDataResponse
    }
    dispatch(f1DataActions.setRaceData(raceData));

    dispatch(f1DataActions.setDataLoaded(true));
  }

  return (
    <div className={classes.filter}>
      {years.map((year, index) => {
        return (
          <div tabIndex={index} key={year} className={classes.yearTile} onClick={selectedYearHandler.bind(this, year)}>
            {year}
          </div>
        )
      })}
    </div>
  )
}

export default YearFilter;