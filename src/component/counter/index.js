import React from 'react'
import {connect} from 'react-redux'
import {renderIf} from '../../lib/util'
import { updateCounterStatus } from '../../action/counter-action.js'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = { counter : props.counter }
  }

  render() {
    var x = this
    var { counter, card } = this.props
    setTimeout(function() {
      if( counter > -1) x.props.updateCounterStatus(counter - 1, card)
    }, 1000)
    return (
      <div className="cover">
      <ul className="over">
        <li>{this.props.counter}</li>
        {renderIf((this.props.counter > 0 ), <li>Count down begins!!</li>)}
        {renderIf((this.props.counter === 0 ), <li>{'Let\'s go!!'}</li>)}
      </ul>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    counter: state.counter,
    card: state.card,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    updateCounterStatus: (counter, card) => dispatch(updateCounterStatus(counter, card)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter)
