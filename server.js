var express = require('express');//used to create a webserver i.e learnning how to listen on a port
var morgan = require('morgan');//help us  output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {//if client makes request to url/ this function is executed i.e we send files to client
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {       
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
