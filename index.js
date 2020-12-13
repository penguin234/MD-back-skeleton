const express = require('express');
const app = express();

var cors = require('cors')
app.use(cors());

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


function AddPost(req, res) {
    let a = req.body['a'];
    let b = req.body['b'];

    let result = a + b;

    res.send({
        result: result
    });
}

app.post('/add', AddPost);


function SubGet(req, res) {
    let a = req.body['a'];
    let b = req.body['b'];

    let result = a - b;

    res.send({
        result: result
    });
}

app.get('/sub', SubGet);


function HelloWorld(req, res) {
    res.send({
        result: 'World!'
    });
}

app.get('/hello', HelloWorld);


const PORT = 3000;

const server = app.listen(PORT, function() {
    console.log('listenning on port ' + PORT.toString());
});