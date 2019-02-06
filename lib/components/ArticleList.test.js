import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from './ArticleList';

describe('ArticleList',  () => {
    const testProps= {
        articles: {
            a: {id: 'a'},
            b: {id: 'b'}
        },
        articleActions: {
            lookupAuthor: jest.fn(()=> ({}))
        }
    };
    it('should render correctly', ()=> {
        const wrapper = renderer.create(<ArticleList {...testProps} />).toJSON();
        expect(wrapper.children).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
    });
});