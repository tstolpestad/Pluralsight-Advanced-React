import Article from './Article';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ArticleList extends PureComponent {
    render() {
        return (
            <div>
                {Object.values(this.props.articles).map(article => <Article
                    key={article.id}
                    article={article}
                />)}
            </div>
        );
    }
}

ArticleList.propTypes = {};

export default ArticleList;