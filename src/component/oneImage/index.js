
import React from 'react'


export class OneImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
       <div style={this.props.style} className="oneImage" >
            <img src={this.props.image}/>
       </div>
    )
  }
}
