//console.log('Hello world');
const express = require('express')
const helmet = require("helmet");
const app = express()
const port = 3000

app.use(helmet());
var bodyParser = require('body-parser')


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
})
app.post('/soap', function (req, res) {
    res.send('some text 1')
})

app.post('/rest', function (req, res) {
    res.send('some text 2')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

