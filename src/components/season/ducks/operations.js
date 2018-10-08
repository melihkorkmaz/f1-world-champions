import actions from './actions';
import api from '../../../utils/api.helper';

const seasonList = () => (dispatch) => {
    dispatch(actions.startFetchSeasonsList());
    return api.fetchSeasons().then(seasons => dispatch(actions.endFetchSeasonsList(seasons)));
};

const fetchSeason = yearOfSeason => (dispatch) => {
    dispatch(actions.startFetchSeason());
    return api.fetchSeason(yearOfSeason).then(result => (
        dispatch(actions.endFetchSeason(result))
    )).catch(() => {
        // @TODO: Log error
    });
};

export default {
    seasonList,
    fetchSeason
};
