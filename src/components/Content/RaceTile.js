import React from 'react';
import classes from './RaceTile.module.css';
import checkeredFlag from '../../assets/checkeredFlag.png';
import WinnerTile from './WinnerTile';
import NumberCard from '../UI/NumberCard';

const RaceTile = (props) => {
  const date = props.date.split('-').reverse().join('-');

  const winners = () => {
    let winnersContent = [];
    for (let index = 0; index < 3; index++) {
      winnersContent.push(<WinnerTile
        key={index}
        position={index + 1}
        givenName={props.results[index].Driver.givenName}
        familyName={props.results[index].Driver.familyName}
        constructorName={props.results[index].Constructor.name}
        time={props.results[index].Time ? props.results[index].Time.time : '-'}
      />)
    }
    return winnersContent;
  }

  return (
    <div className={classes.raceTileContainer}>
      <NumberCard title="Round" number={props.round} />
      <fieldset>
        <legend>{date}</legend>
        <div className={classes.detailsContainer}>
          <div className={classes.location}>{props.raceName}</div>
          <div className={classes.track}>{props.circuit.circuitName}</div>
        </div>
      </fieldset>
      <div className={classes.resultsContainer}>
        <div className={classes.resultsContent}>
          <div className={classes.flag}>
            <img src={checkeredFlag} alt="Chequered Flag" />
          </div>
          <div className={classes.winnersContainer}>
            {winners()}
          </div>
        </div>
      </div>
      <NumberCard title="Laps" number={props.results[0].laps} />
    </div>
  )
}

export default RaceTile;