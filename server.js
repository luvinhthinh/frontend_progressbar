/**
 * Created by User on 11/27/2015.
 */

var express = require('express');
var app = express();

var oneDay = 86400000;

// New call to compress content
app.use(express.compress());

app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.listen(process.env.PORT || 8080);