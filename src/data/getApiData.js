export const getSeasonWinners = async (selectedYear) => {
  const response = await fetch(`https://ergast.com/api/f1/${selectedYear}/driverStandings/1.json`);
  const apiData = await response.json();
  return apiData.MRData.StandingsTable.StandingsLists[0];
}

export const getRaceData = async (selectedYear) => {
  const responseRace = await fetch(`https://ergast.com/api/f1/${selectedYear}/results.json?limit=500`);
  const apiData = await responseRace.json();
  return apiData.MRData.RaceTable.Races;
}