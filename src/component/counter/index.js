import React from 'react'
import {connect} from 'react-redux'
import {counterUpdate} from '../../action/counter-action.js'

class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = { counter : props.counter }
  }

  render() {
    var x = this;
    var { counter } = this.props;
    setTimeout(function() {
      if (counter > 0) {
        counter = counter - 1
        x.props.counterUpdate(counter)
      }
    }, 1000);
    return (
      <div className="counter">
      <ul>
        <li>{this.props.counter}</li>
        <li>Count down begins!!</li>
      </ul>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    counterUpdate: (val) => dispatch(counterUpdate(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter)
