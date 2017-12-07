
import React from 'react'
import {connect} from 'react-redux'

import {renderIf} from '../../lib/util'
import { playAudio, setVolume } from '../../action/sound-action.js'

class OneImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
    this.handleEnter = this.handleEnter.bind(this)
  }
  handleEnter(e){
    e.preventDefault()
    this.props.playAudio({name:'clickSound', volume:0.1})
  }
  render(){
    return (
    <div
    style={this.props.style}
    className='oneImage flip-container'
    onMouseLeave={this.handleEnter}
    onMouseEnter={this.handleEnter}
    >
       <div className={this.props.classes}
            onClick={this.props.onClick}
            onChange={this.props.onChange}>
          <div className="front" >
            <img style={this.props.circle} id={this.props.id} src={this.props.frontImage}/>
          </div>
          <div className="back">
             <img style={this.props.circle} src={this.props.backImage}/>
          </div>
       </div>
    </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    classes: props.classes,
    flip: state.card.flip,
  }
}

const mapDispatchToProp = (dispatch, getState) => {
  return {
    playAudio: (val) => dispatch(playAudio(val)),
    setVolume: (val) => dispatch(setVolume(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(OneImage)
