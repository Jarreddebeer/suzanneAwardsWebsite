var express = require('express')
  , routes  = require('./routes');

var app = express();
app.disable('x-forwarded-for');
app.use(express.static(__dirname + 'public/'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', routes.index);

app.listen(5000);

module.exports = app;
