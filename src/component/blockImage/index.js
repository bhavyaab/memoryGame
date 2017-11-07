import React from 'react'
import OneImage from '../oneImage'

export class BlockImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      position: [0,1,2,3,4,5,6,7,8,9,10,11],
      images : ['../../data/apple.jpg', '../../data/book.jpg', '../../data/flower.jpg', '../../data/tiger.jpg'],
    }
  }
  render(){
    function getRandomInt(random) {
      var rando = Math.floor(Math.random() * 4)
      if( random.indexOf(rando) === -1  && random.length < 4) random.push(rando)
      else if(random.length == 4) return random
      return getRandomInt(random)
    }
    const ramdom = getRandomInt([])
    const allImage = this.state.position.map( (i) =>
      <OneImage key={i} image={this.state.images[0]}/>
    )
    return (
      <div className="blockImage">
        {allImage}
      </div>
    )
  }
}
