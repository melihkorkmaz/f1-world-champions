import actions from './actions';
import api from '../../../utils/api.helper';

const seasonList = () => (dispatch) => {
    dispatch(actions.startFetchSeasonsList());
    return api.fetchSeasons()
        .then(seasons => dispatch(actions.endFetchSeasonsList(seasons)))
        .catch(err => dispatch(actions.onFetchSeasonsListError(err)));
};

const fetchSeason = yearOfSeason => (dispatch) => {
    dispatch(actions.startFetchSeason());
    return api.fetchSeason(yearOfSeason).then(result => (
        dispatch(actions.endFetchSeason(result))
    )).catch(err => dispatch(actions.onFetchSeasonError(err)));
};

export default {
    seasonList,
    fetchSeason
};
