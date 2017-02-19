//importar
var express = require('express');
var app = express();
var path = require('path');
//instanciar
//var app = express();

//ruteo
app.get('/', function(req, res){
    res.sendfile(__dirname + '/gh-pages/index.html');
});
app.use(express.static(path.join(__dirname,'gh-pages')));

app.get('/', function(req, res){
  res.send('hello world');
});
//escuchar
app.listen(9000);

//console.log("Servidor Express escuchando en modo %s", app.setings.env);
