var express = require('express');
var app = express();
var bodyPaser = require('body-parser');

var urlencodedParser = bodyPaser.urlencoded({extended:false});

var port = process.env.PORT || 3000;

// express middleware express.static
app.use('/assets', express.static(__dirname + '/public'));


// custom middleware
app.use('/', (req, res, next)=>{
    console.log('req url: ', req.url);
    next();
})

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/api', (req, res)=>{
    res.json({firstname: 'John', lastname:'Doe'});
})

app.post('/api/login', urlencodedParser, function(req, res){
    //.... not implemented
    //console.log(req.bode.firstname)
    //console.log(req.bode.lastname)
})

app.listen(port);