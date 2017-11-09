import React from 'react'
import {OneImage} from '../oneImage'


export class BlockImage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      position: [1,2,3,4,5,6,7,8,9,10,11],
      images : ['../../data/apple.jpg', '../../data/book.jpg', '../../data/flower.jpg', '../../data/tiger.jpg'],
    }
  }

  render(){
    function getRandomInt() { return  Math.floor(Math.random() * 3)}
    var combinationArray = []
    var allImage = []
    var lookup = {}
    var count = 0
    var element = ''
    var random
    function combination(){
      random = Math.floor(Math.random() * 4)
      !lookup[random]? lookup[random] = 0:
      lookup[random] > 3? combination() : combinationArray.push(random)
      lookup[random]++
      if (combinationArray.length < 12) return combination()
      return combinationArray
    }
    combination()
    var layout = {
      top: `${i * 20}%`,
      left: `${j * 20}%`,
    }
    for(var i = 0; i < 4; i++){
      for(var j = 0; j < 4; j ++){
        if(!(((i == 1) && (j == 1)) || ((i == 1) && (j == 2)) || ((i == 2) && (j == 1)) || ((i == 2) && (j == 2)))){
          element = <OneImage
            style={  {top: `${i * 22.5}%`,right: `${j * 22.5}%`, position: `absolute`}}
            image={this.state.images[combinationArray[count]]}/>
          console.log('element == ', element.props.style)
          allImage[count] = element
          count++
        }
      }
    }
    console.log('allImage length ', allImage.length, 'count == ', count, combinationArray[12])
    return (
      <div className="blockImage">
        {allImage}
      </div>
    )
  }
}
