const mapRaces = data => (
  data.MRData.RaceTable.Races.map((race) => {
    const [winner] = race.Results;
    return {
      round: race.round,
      date: race.date,
      name: race.raceName,
      lap: winner.laps,
      time: winner.Time.time,
      circuit: { name: race.Circuit.circuitName },
      winner: {
        driver: {
          driverId: winner.Driver.driverId,
          name: `${winner.Driver.givenName} ${winner.Driver.familyName}`
        },
        constructor: { name: winner.Constructor.name }
      }
    };
  })
);

const mapStandings = data => data.MRData.StandingsTable.StandingsLists[0];
const mapStandingsList = data => data.MRData.StandingsTable.StandingsLists.map(listItem => ({
    year: parseInt(listItem.season, 10),
    winner: { name: `${listItem.DriverStandings[0].Driver.givenName} ${listItem.DriverStandings[0].Driver.familyName}` }
}));

const mapSeason = (data) => {
    const [standings, races] = data;
    const seasonChampionDriver = standings.DriverStandings[0].Driver;
    const [seasonChampionConstructor] = standings.DriverStandings[0].Constructors;

    return {
        season: standings.season,
        winner: {
            driver: {
                driverId: seasonChampionDriver.driverId,
                name: `${seasonChampionDriver.givenName} ${seasonChampionDriver.familyName}`
            },
            constructor: {
                name: seasonChampionConstructor.name
            }
        },
        races
    };
};


export default {
    mapRaces, mapSeason, mapStandings, mapStandingsList
};
