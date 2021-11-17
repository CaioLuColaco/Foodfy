const express = require('express')
const server = express()

server.get("/", function(req, res) {
    return res.render('home.html')
})

server.listen(5000, function() {
    console.log("server is running")
})