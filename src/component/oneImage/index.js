
import React from 'react'
import {connect} from 'react-redux'

import {renderIf} from '../../lib/util'

import Eye from '../eyes'

import Eyes from '../eyes'

class OneImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
    <div style={this.props.style} className='oneImage flip-container'>
       <div className={this.props.classes} onClick={this.props.onClick} onChange={this.props.onChange}>
          <div className="front">
            <img id={this.props.id} src={this.props.frontImage}/>
            {renderIf(this.props.notCenter, <Eye />)}
          </div>
          <div className="back">
            <img src={this.props.backImage}/>
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProp)(OneImage)
