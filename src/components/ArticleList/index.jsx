import React, {Component} from 'react';

import Article from '../Article'
import './styles.css';

class ArticleList extends Component{
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    const {list} = this.props;
    return (
      <div className="article-list">
      {
        list.map(
          single => <Article 
            single={single}
            key={single.id}
          />
        )
      }
      </div>
    );
  }
}

export default ArticleList