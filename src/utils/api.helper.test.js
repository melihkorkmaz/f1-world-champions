/* global describe, jest, it, expect */
import apiTestResponses from './api-test-response.json';
import api, { seasonResultURL, seasonStandingsURL } from './api.helper';

describe('API Helper', () => {

  // Mocking fetch. Fetch is a window object.
  window.fetch = jest.fn().mockImplementation((url) => {
    let responseJSON = {};

    if (url === seasonStandingsURL(2014)) {
      responseJSON = apiTestResponses.standings;
    } else if (url === seasonResultURL(2014)) {
      responseJSON = apiTestResponses.results;
    }

    return Promise.resolve({
      json: () => Promise.resolve(responseJSON)
    });
  });

  it('should return seasons', async () => {
    const seasonList = await api.fetchSeasons();
    expect(seasonList.length).toBeGreaterThan(0);
  });


  it('should return season details', async () => {
    const seasonDetails = await api.fetchSeason(2014);
    expect(seasonDetails.season).toEqual('2014');
    expect(seasonDetails.races.length).toEqual(19);

    // Check for schema
    expect(seasonDetails.races[0].winner.driver).toEqual({ driverId: 'rosberg', name: 'Nico Rosberg' });
  });
});
