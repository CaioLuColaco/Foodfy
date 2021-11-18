const express = require('express')
const server = express()

server.set("view engine", 'html')

server.get("/", function(req, res) {
    return res.render('home')
})

server.listen(5000, function() {
    console.log('server is running')
})