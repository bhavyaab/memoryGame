import React from 'react'
import ReactDom from 'react-dom'
import {connect} from 'react-redux'
import { followMouse } from '../../action/mouse-action.js'

class Eyes extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
<<<<<<< HEAD
    // this.eyeMove = this.eyeMove.bind(this)
  }

  // eyeMove(e){
  //   e.preventDefault()
  //   var eye = this.refs.eye
  //   console.log('eye == ', eye, ' offset', e.nativeEvent.offsetX, this)
  //   var x = (e.nativeEvent.offsetX) + (eye.offsetWidth / 2)
  //   var y = (e.nativeEvent.offsetY) + (eye.offsetHeight / 2)
  //   var rad = Math.atan2(event.pageX - x, event.pageY - y)
  //   var rot = (rad * (180 / Math.PI) * -1) + 180
  //   // eye.css({
  //   //   '-webkit-transform': 'rotate(' + rot + 'deg)',
  //   //   '-moz-transform': 'rotate(' + rot + 'deg)',
  //   //   '-ms-transform': 'rotate(' + rot + 'deg)',
  //   //   'transform': 'rotate(' + rot + 'deg)',
  //   // })
  //   eye.style.transform = 'rotate(' + rot + 'deg)'
  // }
  // eyeMove(e){
  //   e.preventDefault()
  //   var eye = this.refs.eye
  //   var x = (this.props.x) + (eye.offsetWidth / 2)
  //   var y = (this.props.y) + (eye.offsetHeight / 2)
  //   console.log('eye == ', eye, ' offset', x, this)
  //   var rad = Math.atan2(event.pageX - x, event.pageY - y)
  //   var rot = (rad * (180 / Math.PI) * -1) + 180
  //   eye.style.transform = 'rotate(' + rot + 'deg)'
  // }
  // componentWillMount() {
  //   ReactDom.findDOMNode(this).addEventListener('onMouseMove', this.eyeMove)
  // }
  componentWillReceiveProps(props){
    var eye = this.refs.eye
    var x = (props.mouse.offsetX) + (eye.offsetWidth / 2)
    var y = (props.mouse.offsetY) + (eye.offsetHeight / 2)
    var rad = Math.atan2(event.pageX - x, event.pageY - y)
    var rot = (rad * (180 / Math.PI) * -1) + 180
    console.log('MOUSE ',props, rad)
    eye.style.transform = 'rotate(' + rot + 'deg)'
=======
  }

  componentWillReceiveProps(props){
    var eye = this.refs.eye.getBoundingClientRect()
    var x = (eye.left) + (eye.width / 2)
    var y = (eye.top) + (eye.height / 2)
    var rad = Math.atan2(event.pageX - x, event.pageY - y)
    var rot = (rad * (180 / Math.PI) * -1) + 180
    this.refs.eye.style.transform = 'rotate(' + rot + 'deg)'
>>>>>>> 8d5f9a4af74e8419c92fe5bf978949d433360d19
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
