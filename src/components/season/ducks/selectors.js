const seasons = state => state.season.years.list;
const seasonsIsFetching = state => state.season.years.isFetching;
const season = state => state.season.seasonDetails;

export default {
    seasons,
    seasonsIsFetching,
    season
};
