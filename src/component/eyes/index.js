import React from 'react'
import ReactDom from 'react-dom'
import {connect} from 'react-redux'

class Eyes extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  componentWillReceiveProps(props){
    var eye = this.refs.eye.getBoundingClientRect()
    var x = (eye.left) + (eye.width / 2)
    var y = (eye.top) + (eye.height / 2)
    var rad = Math.atan2(event.pageX - x, event.pageY - y)
    var rot = (rad * (180 / Math.PI) * -1) + 180
    this.refs.eye.style.transform = 'rotate(' + rot + 'deg)'
    this.refs.eye2.style.transform = 'rotate(' + rot + 'deg)'
  }
  render() {
    return (
      <div className='eyeContainer' >
       <div className='eye' ref="eye"></div>
       <div className='eye' ref="eye2"></div>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {
    mouse: state.mouse,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(Eyes)
