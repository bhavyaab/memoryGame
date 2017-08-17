
import React from 'react'


export class OneImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      position: [1,2,3,4,5,6,7,8,9,10,11,12,13],
    }
  }
  render(){
    return (
       <div className="oneImage">
            <img src={this.props.image}/>
            <img src={this.props.image}/>
            <img src={this.props.image}/>
            <img src={this.props.image}/>
       </div>
    )
  }
}
