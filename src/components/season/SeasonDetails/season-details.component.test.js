/* global describe, it, beforeEach, expect */
import React from 'react';
import { shallow } from 'enzyme';
import SeasonDetails from './season-details.component';

// Sample data for test
const season = {
    season: '2017',
    winner: {
      driver: {
        driverId: 'hamilton',
        name: 'Lewis Hamilton'
      },
      constructor: { name: 'Mercedes' }
    },
    races: [{
      round: 1,
      date: '2017-04-16',
      name: 'Australian Grand Prix',
      lap: 57,
      time: '1:24:11.672',
      circuit: { name: 'Albert Park Grand Prix Circuit' },
      winner: {
        driver: {
          driverId: 'vettel',
          name: 'Sebastian Vettel',
        },
        constructor: { name: 'Ferrari' }
      }
    }, {
      round: 2,
      date: '2017-04-09',
      name: 'Chinese Grand Prix',
      lap: 56,
      time: '1:37:36.158',
      circuit: { name: 'Shanghai International Circuit' },
      winner: {
        driver: {
          driverId: 'hamilton',
          name: 'Lewis Hamilton',
        },
        constructor: { name: 'Mercedes' }
      }
    }]
  };

describe('Season details component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SeasonDetails season={season} yearOfSeason={2017} fetchSeason={() => {}} />);
    });

    it('should render successfully', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should set season winner', () => {
        expect(wrapper.find('.season-details').childAt(0).text()).toEqual(`Season champion is: ${season.winner.driver.name}`);
    });

    it('should render table', () => {
        const table = wrapper.find('table');
        expect(table.find('thead tr').children().length).toEqual(8);
        expect(table.find('tbody').children().length).toEqual(2);
    });

    it('should render row', () => {
      const table = wrapper.find('table');
      const firstRow = table.find('tbody').childAt(0);
      const [firstRace] = season.races;

      expect(firstRow.childAt(0).text()).toEqual(firstRace.round.toString());
      expect(firstRow.childAt(1).text()).toEqual(firstRace.date);
      expect(firstRow.childAt(2).text()).toEqual(firstRace.name);
      expect(firstRow.childAt(3).text()).toEqual(firstRace.circuit.name);
      expect(firstRow.childAt(4).text()).toEqual(firstRace.winner.driver.name);
      expect(firstRow.childAt(5).text()).toEqual(firstRace.winner.constructor.name);
      expect(firstRow.childAt(6).text()).toEqual(firstRace.lap.toString());
  });
});
