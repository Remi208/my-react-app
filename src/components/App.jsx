import React, {Component} from 'react';

import ArticleList from './ArticleList/'
import data from '../data'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      reverse: false
    }
  }

  revertList(){
    this.setState({
      reverse: !this.state.reverse
    });
  }

  render(){
    return(
      <div>
        <h1>Main title</h1>
        <button onClick={this.revertList.bind(this)}>Revert</button>
        <ArticleList list={this.state.reverse ? data.reverse() : data} reverse={this.state.reverse}/>
      </div>
    );
  }
}

export default App