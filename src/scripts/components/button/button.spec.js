/* eslint-env mocha */
import React from 'react';
import { assert, expect } from 'chai';
import { shallow } from 'enzyme';
import Button from './button.component';

describe('<Button />', () => {
    describe('Property - aria-label', () => {
      // TODO
    });

    describe('Property - autofocus', () => {
      // TODO
    });

    describe('Property - className', () => {
        it('should contain the default className', () => {
            const wrapper = shallow(<Button value="Hello" />);
            assert.ok(wrapper.find('button').is('.btn-blue'), 'should contain the className');
        });
    });

    describe('Property - classNameWrapper', () => {
      // TODO
    });

    describe('Property - disabled', () => {
      // TODO
    });

    describe('Property - form', () => {
      // TODO
    });

    describe('Property - hide', () => {
        it('should hide button when hide is true', () => {
            const wrapper = shallow(<Button hidden />);
            expect(wrapper.find('div').children()).to.have.length(0);
        });

        it('should render button when hide is false', () => {
            const wrapper = shallow(<Button hidden={false} />);
            expect(wrapper.find('div').children()).to.have.length(1);
        });
    });

    describe('Property - label', () => {
      // TODO
    });

    describe('Property - name', () => {
      // TODO
    });

    describe('Property - type', () => {
      // TODO
    });

    describe('Property - value', () => {
      // TODO
    });
});
