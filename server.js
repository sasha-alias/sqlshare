var express = require('express');
var bodyParser = require('body-parser')
var api = require('./api');
var path = require('path');
var port = process.env.SQLTABS_SHARING_SERVER_PORT || 8080;

var app = express();
app.use(bodyParser.json({strict: false, limit: '1mb'}));

app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/bower_components", express.static(__dirname + '/bower_components'));

app.get('/api/1.0/docs', api.list); // list documents
app.post('/api/1.0/docs', api.share); // share new document
app.get('/api/1.0/docs/:docid', api.render); // render a document as html

app.listen(port);
