import React from 'react'
import {connect} from 'react-redux'
import {counterUpdate, counterEnd} from '../../action/counter-action.js'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = { counter : props.counter }
  }

  render() {
    var x = this
    var { counter } = this.props
    if(counter > 0){
      setTimeout(function() {
        counter = counter - 1
        x.props.counterUpdate(counter)
      }, 1000)
    } else{
      x.props.counterEnd()
    }
    return (
      <div className="counter">
      <ul>
        <li>{(typeof(this.props.counter) == 'number' )? this.props.counter: ''}</li>
        <li>{(typeof(this.props.counter) == 'number' )? this.props.message: ''}</li>
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
    counterUpdate: (val) => dispatch(counterUpdate(val)),
    counterEnd: (val) => dispatch(counterEnd(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter)
