import config from '../config';
import schema from './schema.mapper';
import httpHelper from './http.helper';

// Url helpers for creating request url
const seasonResultURL = year => `${config.baseApiUrl}/${year}/results/1.json`;
const seasonStandingsURL = year => `${config.baseApiUrl}/${year}/driverStandings.json`;

// Private fetch functions
const fetchSeasonStandings = year => httpHelper.get(seasonStandingsURL(year)).then(data => schema.mapStandings(data));
const fetchSeasonRaces = year => httpHelper.get(seasonResultURL(year)).then(data => schema.mapRaces(data));


const fetchSeasons = (lastSeason = config.lastSeasonToShow, firstSeasonToShow = config.firstSeasonToShow) => {
    const promises = [];
    
    for (let i = lastSeason; i >= firstSeasonToShow; i--) {
      promises.push(httpHelper.get(seasonStandingsURL(i)));
    }

    return Promise.all(promises).then((res) => {
      const mappedData = res
        .map(data => schema.mapStandings(data))
        .map(data => ({
          year: data.season,
          winner: {
            name: `${data.DriverStandings[0].Driver.givenName} ${data.DriverStandings[0].Driver.familyName}`
          }
        }));
      return mappedData;
    });
};

const fetchSeason = year => (
  Promise.all([fetchSeasonStandings(year), fetchSeasonRaces(year)])
    .then(data => schema.mapSeason(data))
);

export { seasonResultURL, seasonStandingsURL };
export default {
  fetchSeasons,
  fetchSeason
};
