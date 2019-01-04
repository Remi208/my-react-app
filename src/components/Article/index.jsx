import React, {PureComponent} from 'react';

class Article extends PureComponent{
  constructor(props){
    super(props)

    this.state = {
      // opened: false
    }
  }
  
  render(){
    const {single, opened, btnClick} = this.props
    return (
      <article className="article-list__article">
        <h2>{single.title}</h2>
        <button onClick={btnClick}>
          {
            opened ? 'Close' : 'Open'
          }
        </button>
        {
          opened ? <p>{single.text}</p> : ''
        }
      </article>
    );
  }
}

export default Article