import React from 'react';
import {render} from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeFirstName} from '../../store/actions'

const putStateToProps = (state) => {
  return {
    firstName: state.firstName,
  }
}

const putActionsToProps = (dispatch) => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch)
  }
}

class ReduxComponent extends React.Component{
  render(){
    const dispatch = this.props.dispatch;
    const {firstName, changeFirstName} = this.props;
    return(
      <div className="name">
        <input 
          type="text"
          placeholder="first"
          value={this.props.firstName}
          onChange={
            (event) => {
              changeFirstName(event.target.value)
            }
          }
        />
        <div className="name__first">{this.props.firstName}</div>
      </div>
    )
  }
}

export default connect(putStateToProps, putActionsToProps)(ReduxComponent)
