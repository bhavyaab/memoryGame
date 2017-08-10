'use strict'

const express = require('express')
const dotenv = require('dotenv').load()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(`${__dirname}/build`))

app.listen(PORT, function(){
  console.log('server up:', PORT)
})
