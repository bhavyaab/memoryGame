'use strict'
import React from 'react'
import {provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import createStore from '../../lib/store.js'
import landing from '../landing'

const store = createStore()

import { BlockImage } from '../BlockImage'
console.log('__DEBUG__', __DEBUG__)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  // <Route exact path='/' component={Landing}> />
  render (){
    return (
      <section>
        <provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path='' component={() => <BlockImage app={this.state} />} />
            </section>
          </BrowserRouter>
        </provider>
      </section>
    )
  }
}

export default App
