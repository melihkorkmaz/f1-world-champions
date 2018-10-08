/* global it, describe, jest, expect, beforeEach */
import api from '../../../utils/api.helper';
import types from './types';
import actions from './actions';
import operations from './operations';
import selectors from './selectors';
import reducers from './reducers';

describe('Season store tests', () => {

    describe('Actions', () => {
        it('should create start seasons list action', () => {
            expect(actions.startFetchSeasonsList()).toEqual({
                type: types.START_FETCH_SEASONS_LIST
            });
        });

        it('should create end seasons list action', () => {
            expect(actions.endFetchSeasonsList('fake-data')).toEqual({
                type: types.END_FETCH_SEASONS_LIST,
                payload: 'fake-data'
            });
        });

        it('should create start season fetch action', () => {
            expect(actions.startFetchSeason(2014)).toEqual({
                type: types.START_FETCH_SEASON_RESULT
            });
        });

        it('should create end season fetch action', () => {
            expect(actions.endFetchSeason(2014)).toEqual({
                type: types.END_FETCH_SEASON_RESULT,
                payload: 2014
            });
        });
    });

    describe('Operations', () => {
        it('should operate season list', async () => {
            const dispatch = jest.fn();
            const fetchSeasonSpy = jest.spyOn(api, 'fetchSeasons');
            fetchSeasonSpy.mockImplementation(() => Promise.resolve({}));

            await operations.seasonList()(dispatch);

            expect(fetchSeasonSpy).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenCalledWith(actions.startFetchSeasonsList());
            expect(dispatch).toHaveBeenCalledWith(actions.endFetchSeasonsList({}));
        });

        it('should opearate fetch season details', async () => {
            const dispatch = jest.fn();
            const fetchSeasonSpy = jest.spyOn(api, 'fetchSeason');
            fetchSeasonSpy.mockImplementation(() => Promise.resolve({}));

            await operations.fetchSeason(2014)(dispatch);

            expect(fetchSeasonSpy).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenCalledWith(actions.startFetchSeason());
            expect(dispatch).toHaveBeenCalledWith(actions.endFetchSeason({}));
        });
    });

    describe('Selectors', () => {
        let state = {};
        beforeEach(() => {
            state = {
                season: {
                    years: {
                        list: [],
                        isFetching: false
                    },
                    seasonDetails: { season: 2014 }
                }
            };
        });
        it('should return season list', () => {
            expect(selectors.seasons(state)).toEqual([]);
        });
        it('should return seasons fetching', () => {
            expect(selectors.seasonsIsFetching(state)).toBeFalsy();
        });

        it('should return season details', () => {
            expect(selectors.season(state)).toEqual({ season: 2014 });
        });
    });

    describe('Reducers', () => {
        it('should start years fetching', () => {
            const newState = reducers(null, actions.startFetchSeasonsList());
            expect(newState.years).toEqual({
                list: [],
                isFetching: true
            });
        });

        it('should set years on end fetch action', () => {
            const newState = reducers(null, actions.endFetchSeasonsList(['fake-list']));
            expect(newState.years).toEqual({
                list: ['fake-list'],
                isFetching: false
            });
        });

        it('should start season fetching', () => {
            const newState = reducers(null, actions.startFetchSeason());
            expect(newState.seasonDetails).toEqual({ isFetching: true });
        });

        it('should set season details on end fetch action', () => {
            const newState = reducers(null, actions.endFetchSeason({ 'races': 'fake-result' }));
            expect(newState.seasonDetails).toEqual({
                isFetching: false,
                races: 'fake-result'
            });
        });
    });

});
