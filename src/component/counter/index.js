import React from 'react'
import {connect} from 'react-redux'
import {counterUpdate} from '../../action/counter-action.js'

class Counter extends React.Component {
  constructor (props) {
    super(props);
    this.state = { counter : props.val }
  }

  render() {
    // var x = this;
    var { counter } = this.props.counterUpdate();
    setTimeout(function() {
      if (counter > 0) {
        this.props.counterUpdate(counter - 1);
      }
    }, 1000);
    return (
      <div className="counter">
      <ul>
        <li>{counter}</li>
        <li>Count down begins!!</li>
      </ul>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    val: props.val,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    // counterStart: (val) => dispatch(counterStart(val)),
    counterUpdate: (val) => dispatch(counterUpdate(val)),
    // counterEnd: (val) => dispatch(counterEnd(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter)
