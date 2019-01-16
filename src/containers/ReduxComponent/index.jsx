import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeFirstName, changeSecondName} from '../../store/form/actions'
import './styles.scss';

const putStateToProps = (state) => {
  return {
    firstName: state.firstName,
    secondName: state.secondName
  }
}

const putActionsToProps = (dispatch) => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  }
}

class ReduxComponent extends React.Component{
  render(){
    // const dispatch = this.props.dispatch;
    const {firstName, changeFirstName, secondName, changeSecondName} = this.props;
    return(
      <div className="name">
        <input 
          type="text"
          placeholder="first"
          value={firstName}
          onChange={
            (event) => {
              changeFirstName(event.target.value)
            }
          }
        />
        <div className="name__first">{firstName}</div>
        <input 
          type="text"
          placeholder="second"
          value={secondName}
          onChange={
            (event) => {
              changeSecondName(event.target.value)
            }
          }
        />
        <div className="name__first">{secondName}</div>
      </div>
    )
  }
}

export default connect(putStateToProps, putActionsToProps)(ReduxComponent)
