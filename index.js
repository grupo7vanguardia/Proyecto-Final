//Server
var express = require('express');

var app = express();
var PORT = 3000;

app.listen(PORT, ()=> {
 console.log('server running on http://localhost:' + PORT);
});