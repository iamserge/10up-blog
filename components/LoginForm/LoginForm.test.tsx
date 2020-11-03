import React from 'react';
import { mount } from 'enzyme';
import LoginForm from "./LoginForm";
import { GlobalContext, defaultContext } from '../../providers/global';

describe("LoginForm", () => {
    it("does not render form and renders message when logged in", () => {
        // Given
        const context = { ...defaultContext };
        context.loggedIn = true;

        // When
        const render = mount(<GlobalContext.Provider value={context}><LoginForm /></GlobalContext.Provider>);
        const form = render.find('form');
        const message = render.find('.message');

        // Then
        expect(form).toHaveLength(0);
        expect(message).toHaveLength(1);
    });

    it("renders correct input fields when not logged in", () => {
        // Given
        const context = { ...defaultContext };
        context.loggedIn = false;

        // When
        const render = mount(<GlobalContext.Provider value={context}><LoginForm /></GlobalContext.Provider>);
        const password = render.find('#password');
        const username = render.find('#username');

        // Then
        expect(password).toHaveLength(1);
        expect(username).toHaveLength(1);
    });

    it("show validation message on empty submit", async () => {
        // Given
        const context = { ...defaultContext };
        context.loggedIn = false;

        // When
        const render = mount(<GlobalContext.Provider value={context}><LoginForm /></GlobalContext.Provider>);
        const form = render.find('form');
        
        form.simulate('submit');
        await Promise.resolve();

        // Then
        const error = render.find('.error')
        expect(error).toHaveLength(1);
        expect(error.text()).toEqual('Both username and password are required')
    });

    it("calls login when form is filled in", async () => {
        // Given
        const loginUser = jest.fn();
        const context = { ...defaultContext };
        context.loggedIn = false;
        context.loginUser = loginUser;

        // When
        const render = mount(<GlobalContext.Provider value={context}><LoginForm /></GlobalContext.Provider>);
        const form = render.find('form');
        const password = render.find('#password');
        const username = render.find('#username');
        username.simulate('change', {target: {name: "pollName", value: "test"}})
        password.simulate('change', {target: {name: "pollName", value: "test123"}})
        form.simulate('submit');
        await Promise.resolve();

        // Then
        expect(loginUser).toHaveBeenCalledWith({
            username: 'test',
            password: 'test123'
        });
        
    });

    it("show error message when user is incorrect", async () => {
        // Given
        const context = { ...defaultContext };
        context.loggedIn = false;
        context.loginError = "error";

        // When
        const render = mount(<GlobalContext.Provider value={context}><LoginForm /></GlobalContext.Provider>);
        const error = render.find('.error')


        // Then
        expect(error).toHaveLength(1);
        expect(error.text()).toEqual('Incorrect username or password')
    });
});
