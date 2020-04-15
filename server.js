var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const chat = require('./routes');

var dbUrl = '';

io.on('connection', () => {
  console.log('a user is connected');
})
  
mongoose.connect(dbUrl, (err) => {
  console.log('mongodb connected', err);
})

app.use('/', chat);

server.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});