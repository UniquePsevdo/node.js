var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send('<html lang="en"><head><meta charset="UTF-8"><title>Title</title></head><body><h1>Hello world!</h1></body></html>')
})

var port = process.env.PORT || 3000;

app.get('/api', (req, res)=>{
    res.json({firstname: 'John', lastname:'Doe'});
})

app.listen(port);