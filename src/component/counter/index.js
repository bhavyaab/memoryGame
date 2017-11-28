import React from 'react'
import {connect} from 'react-redux'
import { updateCounter} from '../../action/counter-action.js'
import { cardStart, cardFlip, cardToggle} from '../../action/card-action.js'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = { counter : props.counter }
  }

  render() {
    var x = this
    var { counter } = this.props
    setTimeout(function() {
      if( counter > 0) x.props.updateCounter(counter - 1)
    }, 1000)
    return (
      <div className="cover">
      <ul className="over">
        <li>{this.props.counter}</li>
        <li>Count down begins!!</li>
      </ul>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    updateCounter: (counter) => dispatch(updateCounter(counter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter)
