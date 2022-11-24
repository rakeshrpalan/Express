const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:true}))


const myObj = {users: [
    {
        id:1,
        name:'roy'
    },
    {
        id:2,
        name:'john'
    },{
        id:3,
        name:'dani'
    }
]}

console.log(myObj);

app.get('/users',(req, res) => {
    res.json(myObj)
})

app.get('/user', (req,res) => {
    res.sendFile(__dirname + '/index.html');
    
});

app.post('/users', (req,res) => {
    console.log(req.body);    
    res.send(`Done : User = ${req.body.user}  &  Id = ${req.body.id}`);
});

app.listen(port, () => {
    console.log(`server running at ${port}`);
});







