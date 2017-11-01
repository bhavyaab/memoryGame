'use strict'
import React from 'react'
import {provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import { BlockImage } from '../BlockImage'

console.log('__DEBUG__', __DEBUG__)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render (){
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='' component={() => <BlockImage app={this.state} />} />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

export default App
