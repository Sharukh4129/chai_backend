const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 4400

app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hitesh')
})
app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai or code </h1>')
})
app.get("/youtube", (req, res) => {
    res.send('Chai or Code')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}!`)
}) 
////git commit