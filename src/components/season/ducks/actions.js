import types from './types';

const startFetchSeasonsList = () => ({
    type: types.START_FETCH_SEASONS_LIST,
});

const endFetchSeasonsList = seasons => ({
    type: types.END_FETCH_SEASONS_LIST,
    payload: seasons
});

const onFetchSeasonsListError = errMessage => ({
    type: types.FETCH_SEASONS_LIST_ERROR,
    payload: errMessage
});

const startFetchSeason = () => ({
    type: types.START_FETCH_SEASON_RESULT
});

const endFetchSeason = seasonResult => ({
    type: types.END_FETCH_SEASON_RESULT,
    payload: seasonResult
});

const onFetchSeasonError = errMessage => ({
    type: types.FETCH_SEASON_RESULT_ERROR,
    payload: errMessage
});

export default {
    startFetchSeasonsList,
    endFetchSeasonsList,
    onFetchSeasonsListError,
    startFetchSeason,
    endFetchSeason,
    onFetchSeasonError
};
