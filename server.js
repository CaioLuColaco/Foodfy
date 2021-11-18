const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const foods = require("./data")

server.set("view engine", "njk")
server.use(express.static('public'))
server.use(express.static('assets'))

nunjucks.configure("views", {
    express:server,
    autoescape: false
})

server.get("/", function(req, res) {
    const data = {
        name: "Foodfy",
        boxTitle: "As melhores receitas",
        boxSubt: "Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.",
        imgChef: "chef",
        cardTitle: "Mais acessados",
    }

    return res.render('home', {items: foods, data})
})
server.get("/sobre", function(req, res) {
    return res.render('sobre')
})
server.get("/receitas", function(req, res) {
    return res.render('receitas', {items: foods})
})

server.listen(5000, function() {
    console.log('server is running')
})