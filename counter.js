const express = require('express')
const app = express()

app.listen(3000, () => console.log('Example app listening on port 3000!'))

var sample = {
    "original_url": "https://www.google.com",
    "short_url": "https://little-url.herokuapp.com/8204"
}

app.get('/', function(req, res) {
    console.log("GET");
    res.send(sample)
})
app.post('/sample', function(req, res) {
    sample.push(req.query.sample)
    res.sendStatus(200)
})


console.log('Hello Kondal this is the backend counter js');