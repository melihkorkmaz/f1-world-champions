/* global describe, it, beforeEach, expect */
import React from 'react';
import { shallow } from 'enzyme';
import WithLoader from './with-loader.component';

describe('With Loader', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<WithLoader isLoading={false}><div id="test-div">Test Loader</div></WithLoader>);
    });

    it('should render children if is not in loading state', () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.find('.sk-fading-circle').exists()).toBeFalsy();

        expect(wrapper.find('#test-div').exists()).toBeTruthy();
        expect(wrapper.find('#test-div').text()).toEqual('Test Loader');
    });

    it('should render loading component if is in loading state', () => {
        wrapper.setProps({ isLoading: true });
        expect(wrapper.find('.sk-fading-circle').exists()).toBeTruthy();
        expect(wrapper.find('#test-div').exists()).toBeFalsy();
    });

    it('should render error message if has error', () => {
        wrapper.setProps({ isLoading: false, hasError: true, errorMessage: 'fake-message' });
        expect(wrapper.find('.sk-fading-circle').exists()).toBeFalsy();
        expect(wrapper.find('#test-div').exists()).toBeFalsy();
        expect(wrapper.find('.error').exists()).toBeTruthy();
        expect(wrapper.find('.error').text()).toEqual('fake-message');
    });

});
