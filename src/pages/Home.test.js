/* global describe, it, beforeEach, expect */
import React from 'react';
import { shallow } from 'enzyme';
import { SeasonsList, Drawer, SeasonDetails } from '../components';
import Home from './Home';

describe('Home page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />);
    });

    it('should render successfully', () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.find('h2').text()).toEqual('Seasons');
        expect(wrapper.childAt(1).type()).toEqual(SeasonsList);
        expect(wrapper.childAt(2).type()).toEqual(Drawer);
        expect(wrapper.childAt(2).childAt(0).type()).toEqual(SeasonDetails);
    });
});
