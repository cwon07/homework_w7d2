require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT
const drinks = require('./models/drinks')

app.get('/', (req, res) => {
    res.send(`Welcome to the Gitpub App!`)
})

app.get('/drinks', (req, res) => {
    res.send(drinks)
})
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})