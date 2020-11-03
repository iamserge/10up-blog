import React from 'react';
import { shallow } from 'enzyme';
import Post from "./Post";

describe("Post", () => {
    it("renders title", () => {
        // When
        const post = {
          title: {
            rendered: "tests"
          },
          excerpt: {
            rendered: "content"
          }
        }
        const render = shallow(<Post post={post} />);
        const title = render.find('h2');

        // Then
        expect(title.text()).toEqual(post.title.rendered)
    });

    it("renders excerpt", () => {
      // When
      const post = {
        title: {
          rendered: "tests"
        },
        excerpt: {
          rendered: "content"
        }
      }
      const render = shallow(<Post post={post} />);
      const excerpt = render.find('.content');

      // Then
      expect(excerpt).toHaveLength(1) 
    });

});
