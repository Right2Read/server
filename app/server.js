'use strict'

const express = require('express')
const server = express()

const port = 3000

server.get('/', function(request, response) {
	response.send('Hello World')
})

server.listen(port, function() {
	console.log(`Right2Read is listening on port ${port}`)
})
