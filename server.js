var express = require('express');
var bodyParser = require('body-parser')
var api = require('./api');
var path = require('path');
var port = process.env.PORT || 8080;



var app = express();
app.use(bodyParser.json({strict: false, limit: '1mb'}));

app.use('/js', express.static(__dirname + '/build'));
app.use('/js', express.static(__dirname + '/node_modules/react/dist/'));
app.use('/js', express.static(__dirname + '/node_modules/react-dom/dist/'));
app.use('/js', express.static(__dirname + '/node_modules/d3/'));
app.use('/js', express.static(__dirname + '/node_modules/c3/'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/marked/'));
app.use('/js', express.static(__dirname + '/node_modules/sqldoc/build'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/node_modules/c3'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/fonts/', express.static(__dirname + '/node_modules/bootstrap/dist/fonts'));

app.get('/api/1.0/docs', api.list); // list documents
app.post('/api/1.0/docs', api.share); // share new document
app.get('/api/1.0/docs/:docid', api.render); // render a document as html
app.get('/api/1.0/json/:docid', api.jsonDoc); // return a json for a doc
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);
