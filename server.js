const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine", "html")
server.use(express.static('public'))
server.use(express.static('assets'))

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res) {
    return res.render('home')
})
server.get("/sobre", function(req, res) {
    return res.render('sobre')
})
server.get("/receitas", function(req, res) {
    return res.render('receitas')
})

server.listen(5000, function() {
    console.log('server is running')
})