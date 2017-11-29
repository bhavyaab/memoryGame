import React from 'react'
import ReactDom from 'react-dom'
import {connect} from 'react-redux'

class Eyes extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
    this.eyeMove = this.eyeMove.bind(this)
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
  eyeMove(e){
    e.preventDefault()
    var eye = this.refs.eye
    var x = (this.props.x) + (eye.offsetWidth / 2)
    var y = (this.props.y) + (eye.offsetHeight / 2)
    console.log('eye == ', eye, ' offset', x, this)
    var rad = Math.atan2(event.pageX - x, event.pageY - y)
    var rot = (rad * (180 / Math.PI) * -1) + 180
    eye.style.transform = 'rotate(' + rot + 'deg)'
  }
  // componentWillMount() {
  //   ReactDom.findDOMNode(this).addEventListener('onMouseMove', this.eyeMove)
  // }
  render() {
    return (
      <div className='eyeContainer' ref='eyes'>
       <div className='eye' ref="eye"></div>
       <div className='eye' ref="eye"></div>
      </div>
    )
  }
}
const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProp = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(Eyes)
