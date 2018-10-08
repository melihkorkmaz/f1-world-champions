import config from '../config';
import schema from './schema.mapper';
import httpHelper from './http.helper';

// Url helpers for creating request url
const seasonResultURL = year => `${config.baseApiUrl}/${year}/results/1.json`;
const seasonStandingsURL = year => `${config.baseApiUrl}/${year}/driverStandings.json`;
const allStandigsURL = () => `${config.baseApiUrl}/driverStandings/1.json?limit=100`; // Get all

// Private fetch functions
const fetchSeasonStandings = year => httpHelper.get(seasonStandingsURL(year)).then(data => schema.mapStandings(data));
const fetchSeasonRaces = year => httpHelper.get(seasonResultURL(year)).then(data => schema.mapRaces(data));


const fetchSeasons = (lastSeason = config.lastSeasonToShow, firstSeason = config.firstSeasonToShow) => httpHelper
  .get(allStandigsURL())
  .then(data => schema.mapStandingsList(data))
  .then(data => data.filter(item => item.year >= firstSeason && item.year <= lastSeason));

const fetchSeason = year => (
  Promise.all([fetchSeasonStandings(year), fetchSeasonRaces(year)])
    .then(data => schema.mapSeason(data))
);

export { seasonResultURL, seasonStandingsURL, allStandigsURL };
export default {
  fetchSeasons,
  fetchSeason
};
