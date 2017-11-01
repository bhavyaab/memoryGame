'use strict'

const electron = require('electron')
const app = electron.app
const path = require('path')
const url = require('url')
const BrowserWindow = electron.BrowserWindow

var mainWindow

app.on('ready', function(){
  mainWindow = new BrowserWindow()
  // mainWindow.loadURL('http://bhavya2.herokuapp.com');
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'build/index.html'),
    protocol: 'file:',
    slashes: true,
  }))
})
