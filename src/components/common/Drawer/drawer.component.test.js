/* global describe, it, beforeEach, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import Drawer from './drawer.component';

describe('Drawer component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Drawer title="test-title" open={false} onClose={() => {}} />);
    });

    it('should render successfully', () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.prop('className')).toEqual('drawer');
        expect(wrapper.find('.drawer__title').childAt(0).text()).toEqual('test-title');
    });

    it('should set open classname', () => {
        wrapper.setProps({ open: true });
        expect(wrapper.prop('className')).toEqual('drawer open');
    });

    it('should call onClose prop', () => {
        const onCloseMock = jest.fn();
        wrapper.setProps({ onClose: onCloseMock });
        expect(onCloseMock.mock.calls.length).toEqual(0);
        wrapper.find('.drawer__close-btn').simulate('click');
        expect(onCloseMock.mock.calls.length).toEqual(1);
    });
});
