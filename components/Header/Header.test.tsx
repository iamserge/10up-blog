import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";
import Navigation from '../Navigation/Navigation';

describe("Header", () => {
    it("renders logo", () => {
        // When
        const render = shallow(<Header />);
        const logo = render.find('.logo__image');

        // Then
        expect(logo).toHaveLength(1)
    });

    it("renders text", () => {
        // When
        const render = shallow(<Header />);
        const text = render.find('.logo__text');

        // Then
        expect(text).toHaveLength(1)
    });

    it("renders Navigation component", () => {
        // When
        const render = shallow(<Header />);
        const navigation = render.find(Navigation);

        // Then
        expect(navigation).toHaveLength(1)
    });
});
