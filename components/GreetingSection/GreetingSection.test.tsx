import React from 'react';
import { mount } from 'enzyme';
import GreetingSection from "./GreetingSection";
import { GlobalContext, defaultContext } from '../../providers/global';

describe("GreetingSection", () => {
  it("renders section", () => {
    // Given
    const context = {...defaultContext}
    context.userName = "Test";

    // When
    const render = mount(<GlobalContext.Provider value={context}><GreetingSection /></GlobalContext.Provider>);
    const section = render.find('section.welcome');

    // Then
    expect(section).toHaveLength(1)
 });

  it("renders name", () => {
     // Given
     const context = {...defaultContext}
     context.userName = "Test";

     // When
     const render = mount(<GlobalContext.Provider value={context}><GreetingSection /></GlobalContext.Provider>);
     const title = render.find('span');

     // Then
     expect(title.text()).toContain('Test');
  });
});
