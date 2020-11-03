import React from 'react';
import { shallow } from 'enzyme';
import Layout from "./Layout";
import Header from "../Header/Header";

describe("Layout", () => {
    it("renders Header", () => {
        // When
        const render = shallow(<Layout><span></span></Layout>);
        const header = render.find(Header);

        // Then
        expect(header).toHaveLength(1)
    });
});
