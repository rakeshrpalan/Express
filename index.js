const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('<h1>express</h1>')
    res.json(req.body);
});

app.post('/', (req,res) => {
    res.send('<h1>post</h1>');
    
});

app.listen(port, () => {
    console.log(`server running at ${port}`);
});







