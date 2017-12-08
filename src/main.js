import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'

ReactDom.render(<App />, document.getElementById('root'))

var loading = {
  start: function() {
    document.body.insertAdjacentHTML('beforeend', '<div id="loader"></div>')
    document.getElementById('root').style.display = 'none'
  },
  complete: function() {
    var loading = document.getElementById('loader')
    loading.remove(loading)
    document.getElementById('root').style.display = 'block'
  },
}
loading.start()
document.addEventListener('readystatechange', function() {
  if (document.readyState === 'complete') {
    loading.complete()
  }
})
