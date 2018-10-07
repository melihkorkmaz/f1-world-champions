/* global describe, it, beforeEach, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import SeasonsList from './seasons-list.component';

describe('Seasons list component', () => {
    let wrapper;
    const seasons = [2001, 2002, 2003];
    beforeEach(() => {
        wrapper = shallow(<SeasonsList seasons={seasons} onSeasonSelect={() => {}} />);
    });

    it('should render successfully', () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.children().length).toEqual(3);
        expect(wrapper.childAt(0).find('.seasons__item').text()).toEqual('2001');
        expect(wrapper.childAt(1).find('.seasons__item').text()).toEqual('2002');
        expect(wrapper.childAt(2).find('.seasons__item').text()).toEqual('2003');
    });

    it('should return selected season', () => {
        const onSelectMock = jest.fn();
        wrapper.setProps({ onSeasonSelect: onSelectMock });

        expect(onSelectMock.mock.calls.length).toEqual(0);
        wrapper.childAt(0).find('.seasons__item').simulate('click');
        expect(onSelectMock.mock.calls.length).toEqual(1);
        expect(onSelectMock.mock.calls[0][0]).toEqual(2001);
    });
});
