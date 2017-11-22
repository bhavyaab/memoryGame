import React from 'react'
import {connect} from 'react-redux'
<<<<<<< HEAD
import { updateCounter} from '../../action/counter-action.js'
import { cardStart, cardFlip, cardToggle} from '../../action/card-action.js'
=======
import {counterUpdate, counterEnd} from '../../action/counter-action.js'
>>>>>>> 5e0c4a811f4aa7f3342cea451d47c0d6f6f00ac9

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = { counter : props.counter }
  }

  render() {
<<<<<<< HEAD
    var x = this;
    var { counter } = this.props;
    setTimeout(function() {
      if( counter > 0) x.props.updateCounter(counter - 1)
    }, 1000);
=======
    var x = this
    var { counter } = this.props
    if(counter > 0){
      setTimeout(function() {
        counter = counter - 1
        x.props.counterUpdate(counter)
      }, 1000)
    } else{
      x.props.counterEnd('nn')
    }
>>>>>>> 5e0c4a811f4aa7f3342cea451d47c0d6f6f00ac9
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
    counter: state.counter,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
<<<<<<< HEAD
     updateCounter: (counter) => dispatch(updateCounter(counter)),
     // cardflip: (card) => dispatch(cardFlip(card))
=======
    counterUpdate: (val) => dispatch(counterUpdate(val)),
    counterEnd: (val) => dispatch(counterEnd(val)),
>>>>>>> 5e0c4a811f4aa7f3342cea451d47c0d6f6f00ac9
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter)
