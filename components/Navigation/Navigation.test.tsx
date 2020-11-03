import React from 'react';
import { mount } from 'enzyme';
import Navigation from "./Navigation";
import { GlobalContext, defaultContext } from '../../providers/global';

describe("Navigation", () => {
    it("renders home link", () => {
        // When
        const render = mount(<Navigation />);
        const link = render.find('.menu-item').at(0);

        // Then
        expect(link.text()).toEqual('Home')
    });
    it("renders logout link when logged in", () => {
        // Given
        const context = { ...defaultContext };
        context.loggedIn = true;

        // When
        const render = mount(<GlobalContext.Provider value={context}><Navigation /></GlobalContext.Provider>);
        const logOutLink = render.find('.logged-in');

        // Then
        expect(logOutLink).toHaveLength(1);
    })

    it("renders login link when logged out", async () => {
        // Given
        const context = { ...defaultContext };
        context.loggedIn = false;

       // When
       const render = mount(<GlobalContext.Provider value={context}><Navigation /></GlobalContext.Provider>);
       const logInLink = render.find('.logged-out');


       // Then
       expect(logInLink).toHaveLength(1);
   })
});
