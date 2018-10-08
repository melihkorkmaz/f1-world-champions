import config from '../config';
import schema from './schema.mapper';

const seasonResultURL = year => `${config.baseApiUrl}/${year}/results/1.json`;
const seasonStandingsURL = year => `${config.baseApiUrl}/${year}/driverStandings.json`;

/**
 * In general, seasons list might be requested from an API.
 * But in our app we don't need season details to list seasons as years.
 * So I'm mocking year list as a number array. But in the future,
 * we can change this function to get a list from remote API
 */
const fetchSeasons = () => new Promise((resolve) => {
    const list = [];
    for (let i = config.lastSeasonToShow; i >= config.firstSeasonToShow; i--) {
      list.push(i);
    }
    resolve(list);
  });

const fetchSeasonStandings = year => fetch(seasonStandingsURL(year))
    .then(data => data.json())
    .then(data => schema.mapStandings(data));

const fetchSeasonRaces = year => (
  fetch(seasonResultURL(year)).then(data => data.json()).then(data => schema.mapRaces(data))
);

const fetchSeason = year => (
  Promise.all([fetchSeasonStandings(year), fetchSeasonRaces(year)])
    .then(data => schema.mapSeason(data))
);

export { seasonResultURL, seasonStandingsURL };
export default {
  fetchSeasons,
  fetchSeason
};
