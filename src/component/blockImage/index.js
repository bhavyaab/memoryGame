import React from 'react'
import {OneImage} from '../oneImage'

import generateCombination from '../../lib/gameUtil.js'

export class BlockImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      position: [1,2,3,4,5,6,7,8,9,10,11],
      images : ['../../data/apple.jpg', '../../data/book.jpg', '../../data/flower.jpg', '../../data/tiger.jpg'],
    }
  }

  render(){
    var allImage = []
    var combinationArray = generateCombination()
    var count = 0
    var element
    for(var i = 0; i < 4; i++){
      for(var j = 0; j < 4; j ++){
        if(!(((i == 1) && (j == 1)) || ((i == 1) && (j == 2)) || ((i == 2) && (j == 1)) || ((i == 2) && (j == 2)))){
          element = <OneImage
            style={{
              top: `${i * 22.5}%`,
              right: `${j * 22.5}%`,
              position: `absolute`}}
            image={this.state.images[combinationArray[count]]} />
          allImage[count] = element
          count++
        }
      }
    }
    return (
      <div className="blockImage">
        {allImage}
        <OneImage
          style={{
            top: `22.5%`,
            right: `22.5%`,
            height: '42.5%',
            width: '42.5%',
            position: `absolute`}}
          image={'../../data/apple.jpg'} />
      </div>
    )
  }
}
