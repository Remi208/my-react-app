import React, {Component} from 'react';

import Article from '../Article/'
import './styles.scss';

class ArticleList extends Component{
  constructor(){
    super();

    this.state = {
      openedID: null
    }
  }

  handleClose = openedID => this.setState({
    openedID: this.state.openedID === openedID ? null : openedID
  });

  render(){
    const {list} = this.props;
    return (
      <div className="article-list">
      {
        list.map(
          single =>
            <Article 
              single={single}
              key={single.id}
              opened={this.state.openedID === single.id}
              btnClick = {this.handleClose.bind(this, single.id)}
            />
        )
      }
      </div>
    );
  }
}

export default ArticleList