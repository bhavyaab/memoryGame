'use strict'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import createAppStore from '../../lib/store.js'
import Landing from '../landing'

const store = createAppStore()

import { BlockImage } from '../BlockImage'
console.log('__DEBUG__', __DEBUG__)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render (){
    return (
      <section>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path='' component={() => <BlockImage app={this.state} />} />
              <Route exact path='/landing' component={Landing} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}

export default App
