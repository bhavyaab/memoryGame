import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import App from './component/app'

ReactDom.render(<App />, document.getElementById('root'))
// myFunction()
//
// function myFunction() {
//   setTimeout(showPage, 3)
// }
//
// function showPage() {
//   document.getElementsByClassName('loader')[0].style.display = 'none'
//   document.getElementById('root').style.display = 'block'
// }


var loading = {
  start: function() {
    document.body.insertAdjacentHTML('beforeend', '<div id="loader"></div>')
  },
  complete: function() {
    var loading = document.getElementById('loader')
    console.log('loading')
    loading.remove(loading)
  },
}
loading.start()
document.addEventListener('readystatechange', function() {
  console.log(document.readyState)
  if (document.readyState === 'complete') {
    loading.complete()
  }
})
