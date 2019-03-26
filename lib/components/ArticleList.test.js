import React from 'react';
//import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import ArticleList from './ArticleList';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList',  () => {
    const testProps= {
        articles: {
            a: {id: 'a'},
            b: {id: 'b'}
        }
    };
    it('should render correctly', ()=> {
        const wrapper = shallow(<ArticleList {...testProps} />) ;
        expect(wrapper.find('ArticleContainer')).toHaveLength(2);
        expect(wrapper).toMatchSnapshot();
    });
});