const express = require('express')
const http = require('http')
const path = require('path')


let app = express()

app.use('/', express.static(path.join(__dirname, 'public')))
app.server = http.createServer(app)
app.server.listen(3000)
console.log('> GDG SJC')
console.log('> AngularJS 1 - Do Zero ao Deploy')
console.log('> Running: //localhost:3000')
