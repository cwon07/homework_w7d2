require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const app = express()
const PORT = process.env.PORT;

const drinks = require('./models/drinks')

app.use(morgan("dev"))


app.get('/', (req, res) => {
    res.send(`Welcome to the Gitpub App!`)
})

// INDEX
app.get('/drinks', (req, res) => {
    res.render("index.ejs", {drinks})
})

// shows one drink - drinks/:id
app.get('/drinks/:id', (req, res) => {
    const id = req.params.id
    const drink = drinks[id]
    // console.log('drink:', drink);
    res.render("show.ejs", {drink})
 })

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})