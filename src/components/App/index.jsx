import React, {Component} from 'react';

import ArticleList from '../ArticleList/'
import data from '../../data'
import './styles.css'

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
        <div className="name">
          <div className="name__first">{this.props.firstName}</div>
          <input type="text" placeholder="first"/>
          <div className="name__second">{this.props.secondName}</div>
          <input type="text" placeholder="second"/>
        </div>
      </div>
    );
  }
}

export default App