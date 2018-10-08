import types from './types';

const defaultState = {
  years: { list: [], isFetching: false },
  seasonDetails: { isFetching: false }
};

const seasonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.START_FETCH_SEASONS_LIST:
      return {
        ...state,
        years: { isFetching: true, list: [] }
      };
    case types.END_FETCH_SEASONS_LIST:
      return {
        ...state,
        years: { isFetching: false, list: action.payload }
      };
    case types.FETCH_SEASONS_LIST_ERROR:
      return { ...state, years: { isFetching: false, hasErrors : true, errorMessage : action.payload, list: [] }};
    case types.START_FETCH_SEASON_RESULT:
      return {
        ...state,
        seasonDetails: {
          isFetching: true
        }
      };
    case types.END_FETCH_SEASON_RESULT:
      return {
        ...state,
        seasonDetails: {
            isFetching: false,
            ...action.payload
        }
      };
    case types.FETCH_SEASON_RESULT_ERROR:
      return { ...state, seasonDetails: { isFetching: false, hasErrors: true, errorMessage: action.payload } };
    default:
      return state;
  }
};

export default seasonReducer;
