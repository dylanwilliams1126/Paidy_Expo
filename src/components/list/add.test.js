import React from 'react';
import { render } from '@testing-library/react-native';
import Add from './add';

describe('App Screen Page Test', () => {
    test('Check to see if renders property', () => {
        const component = <Add />;
        const wrapper = render(component);
        expect(wrapper).toBeTruthy();
        expect(wrapper).toJSON().toMatchSnapshot();
    });
})