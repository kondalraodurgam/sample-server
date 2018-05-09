const express = require('express')
const app = express()

app.listen(3000, () => console.log('Example app listening on port 3000!'))

var sample = [
    "Welcome to the backend Project",
    "Working Backend prohject",
    "Created GLithc Project"
]
app.get('/', function(req, res) {
    res.send(sample)
})
app.post('/sample', function(req, res) {
    sample.push(req.query.sample)
    res.sendStatus(200)
})


console.log('Hello Kondal this is the backend counter js');