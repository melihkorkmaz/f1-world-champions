const seasons = state => state.season.years.list;
const seasonsIsFetching = state => state.season.years.isFetching;
const seasonHasErrors = state => state.season.years.hasErrors;
const season = state => state.season.seasonDetails;

export default {
    seasons,
    seasonsIsFetching,
    seasonHasErrors,
    season
};
