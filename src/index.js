import './style/main.scss'

import React from 'react'
import { render } from 'react-dom'

import {Header} from './component/Header'
import { Home } from './component/Home'
import { OneImage } from './component/OneImage'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      images : ['../../data/apple.jpg', '../../data/book.jpg', '../../data/flower.jpg', '../../data/tiger.jpg'],
    }
  }
  render (){
    return (
      <div className="container">
        <div className="row">
           <div className="col-xs-10 col-xs-offset-1">
              <Header/>
            </div>
         </div>
      <div className="row">
         <div className="col-xs-10 col-xs-offset-1">
            <OneImage image={this.state.images[1]}/>
          </div>
       </div>
      </div>
    )
  }
}
render(<App/>, document.getElementById('root'))
