/* global describe, jest, it, expect, beforeEach, afterEach */
import httpHelper from './http.helper';
import apiTestResponses from '../data/api-test-response.json';
import api, { seasonResultURL, seasonStandingsURL, allStandigsURL } from './api.helper';

const createHttpMock = () => {
  const httpHelperMock = jest.spyOn(httpHelper, 'get');
  httpHelperMock.mockImplementation((url) => {
    let responseJSON = {};

    if (url === seasonStandingsURL(2014) || url === allStandigsURL()) {
      responseJSON = apiTestResponses.standings;
    } else if (url === seasonResultURL(2014)) {
      responseJSON = apiTestResponses.results;
    }

    return Promise.resolve(responseJSON);
  });
  return httpHelperMock;
};

describe('API Helper', () => {

  let httpMock;
  beforeEach(() => {
    httpMock = createHttpMock();
  });

  it('should return seasons', async () => {
    const seasonList = await api.fetchSeasons(2014, 2014);
    expect(seasonList.length).toBeGreaterThan(0);
  });

  it('should return season details', async () => {
    const seasonDetails = await api.fetchSeason(2014);

    expect(httpMock).toHaveBeenCalled();
    expect(httpMock).toHaveBeenCalledTimes(2);
    expect(httpMock).toHaveBeenCalledWith(seasonStandingsURL(2014));
    expect(httpMock).toHaveBeenCalledWith(seasonResultURL(2014));

    expect(seasonDetails.season).toEqual('2014');
    expect(seasonDetails.races.length).toEqual(19);

    // Check for schema
    expect(seasonDetails.races[0].winner.driver).toEqual({
      driverId: 'rosberg',
      name: 'Nico Rosberg'
    });
  });

  afterEach(() => {
    httpMock.mockClear();
  });
});
