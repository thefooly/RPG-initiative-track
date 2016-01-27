var express = require('express')
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, function () {
  console.log('Listening on port 3000!');
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/list', function (req, res) {
  res.render('list.ejs');
});

app.get('/', function (req, res) {
  res.render('show.ejs');
});


var listCharacter = []
var selectedCharacter = undefined
io.on('connection', function (socket) {
  socket.on('subscribe', function(data){
  	socket.emit('change', {
  		selected: selectedCharacter,
  		list: listCharacter
  	})
  })

  socket.on('change', function(data){
  	listCharacter = data.list
  	selectedCharacter = data.selected

  	socket.broadcast.emit('change', {
  		selected: selectedCharacter,
  		list: listCharacter
  	})
  })

});