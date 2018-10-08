/* global it, describe, expect, jest */
import httpHelper from './http.helper';

describe('HTTP Helper', () => {
  it('should get data from url', async () => {

     // Mocking fetch. Fetch is a window object.
    window.fetch = jest.fn();
    window.fetch.mockImplementation(() => {
      const fetchResult = { data: 'fake-data' };

      return Promise.resolve({
        json: () => Promise.resolve(fetchResult)
      });
    });

    const response = await httpHelper.get('fake-url');
    expect(response).toEqual({ data: 'fake-data' });
    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith('fake-url');
    expect(window.fetch).toHaveBeenCalledTimes(1);

    // It should cache the url data for second call
    await httpHelper.get('fake-url');
    expect(window.fetch).toHaveBeenCalledTimes(1); // no second fetch from url

  });
});
