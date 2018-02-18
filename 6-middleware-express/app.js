var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// express middleware express.static
app.use('/assets', express.static(__dirname + '/public'));


// custom middleware
app.use('/', (req, res, next)=>{
    console.log('req url: ', req.url);
    next();
})

app.get('/', (req, res)=>{
    res.send('<html lang="en"><head><meta charset="UTF-8"><link href="assets/style.css" type="text/css" rel="stylesheet"></head><title>Title</title></head><body><h1>Hello world!</h1></body></html>')
})

app.get('/api', (req, res)=>{
    res.json({firstname: 'John', lastname:'Doe'});
})

app.listen(port);