import StateApi from './StateApi';
import {data} from './testdata';

const api = new StateApi(data);

describe('Data Api',  () => {
    it('should return articles as an object',  () => {
        const articles = api.getArticles();
        const articleid = data.articles[0].id;
        const arcticletitle = data.articles[0].title;
        expect(articles).toHaveProperty(articleid);
        expect(articles[articleid].title).toBe(arcticletitle);
    });
    it('should return authors as an object',  ()=> {
        const authors = api.getAuthors();
        const authorid = data.authors[0].id;
        const authorLastName = data.authors[0].lastName;
        expect(authors).toHaveProperty(authorid);
        expect(authors[authorid].lastName).toBe(authorLastName);
    });
});