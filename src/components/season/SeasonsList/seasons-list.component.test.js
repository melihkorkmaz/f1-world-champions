/* global describe, it, beforeEach, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import SeasonsList from './seasons-list.component';

describe('Seasons list component', () => {
    let wrapper;
    const seasons = [2001, 2002, 2003];
    beforeEach(() => {
        wrapper = shallow(<SeasonsList seasons={seasons} onSeasonSelect={() => {}} listSeasons={() => {}}/>);
    });

    it('should render successfully', () => {
        expect(wrapper.exists()).toBeTruthy();
        const seasonDiv = wrapper.childAt(0);
        expect(seasonDiv.children().length).toEqual(3);
        expect(seasonDiv.childAt(0).find('.seasons__item').text()).toEqual('2001');
        expect(seasonDiv.childAt(1).find('.seasons__item').text()).toEqual('2002');
        expect(seasonDiv.childAt(2).find('.seasons__item').text()).toEqual('2003');
    });

    it('should return selected season', () => {
        const onSelectMock = jest.fn();
        wrapper.setProps({ onSeasonSelect: onSelectMock });

        expect(onSelectMock.mock.calls.length).toEqual(0);

        const seasonDiv = wrapper.childAt(0);
        seasonDiv.childAt(0).find('.seasons__item').simulate('click');

        expect(onSelectMock.mock.calls.length).toEqual(1);
        expect(onSelectMock.mock.calls[0][0]).toEqual(2001);
    });
});
