import React from 'react';
import { shallow } from 'enzyme';
import Posts from "./Posts";
import Post from "../Post/Post";

describe("Posts", () => {
    it("renders Posts", () => {
        // When
        const posts = [
          {
            title: {
              rendered: "post 1"
            },
            excerpt: {
              rendered: "content"
            }
          },
          {
            title: {
              rendered: "post 2"
            },
            excerpt: {
              rendered: "content"
            }
          },
          {
            title: {
              rendered: "post 3"
            },
            excerpt: {
              rendered: "content"
            }
          }
        ]
        const render = shallow(<Posts posts={posts} />);
        const post = render.find(Post);

        // Then
        expect(post).toHaveLength(3)
    });
});
