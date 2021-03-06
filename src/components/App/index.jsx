import React, {Component} from 'react';

import ArticleList from '../ArticleList/'
import data from '../../data'
import './styles.scss'

class App extends Component {
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
      <div className="app">
        <h1>Main title</h1>
        <button onClick={this.revertList.bind(this)}>Revert</button>
        <ArticleList list={this.state.reverse ? data.slice().reverse() : data} reverse={this.state.reverse}/>
      </div>
    );
  }
}

export default App