import React, {Component} from 'react';

class Article extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      opened: props.defaultOpened
    }
  }

  handleClose() {
    this.setState({
      opened: !this.state.opened
    });
  }
  
  render(){
    const {single} = this.props
    return (
      <article className="article-list__article">
        <h2>{single.title}</h2>
        <button onClick={this.handleClose.bind(this)}>
          {
            this.state.opened ? 'Close' : 'Open'
          }
        </button>
        {
          this.state.opened ? <p>{single.text}</p> : ''
        }
      </article>
    );
  }
}

export default Article