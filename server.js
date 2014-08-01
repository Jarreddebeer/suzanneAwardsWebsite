var express = require('express')
  , routes  = require('./routes');

var app = express();
app.disable('x-forwarded-for');
app.use(express.static(__dirname + '/build'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/build/index.html');
});

app.listen(5000);

module.exports = app;
