var express = require('express');
var app = express();

const pug = require('pug');

app.use(express.static(__dirname + '/public'))

app.get('/', function(peticion,respuesta){
    
    respuesta.render('index.pug', {titulo: "El nombre de mi app", textoParrafo: "Nuestra tienda de camisetas ofrece lo mejor, satisfacción 100% garantizada"});
    
})

app.listen(3000, function() {
    
    console.log('Escuchando en el puerto 3000');
    
})