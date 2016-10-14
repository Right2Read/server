'use strict'

const express = require('express')
const app = express()
const log = require('log')

app.set('port', process.env.PORT || 3000)
const port = app.get('port')

app.get('/', function(request, response) {
	response.send('Hello World')
})

app.listen(port, function() {
	log.info(`Right2Read server is listening on port ${port}`)
})
