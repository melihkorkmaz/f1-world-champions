/* global describe, it, beforeEach, expect */
import React from 'react';
import { shallow } from 'enzyme';
import Header from './header.component';

describe('Header component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header>fake-children</Header>);
    });

    it('should render successfully', () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.prop('className')).toEqual('header');
        expect(wrapper.childAt(0).text()).toEqual('fake-children');
    });
});
