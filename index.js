const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

let posts = {};


app.get('/posts', (req,res) => {
    res.send(posts);
});

app.post('/posts', (req,res) => {
    let id = randomBytes(4).toString('hex');
    let {title} = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);


});

app.listen(4000, () => {
    console.log('Listening on Port 4000');
});