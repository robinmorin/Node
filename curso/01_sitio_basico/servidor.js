var http = require('http');

http.createServer(function (request,respuesta) {

	respuesta.writeHead(200, {'Content-type': 'text-plain'});
	respuesta.write("Hola Mundo");
	respuesta.end();

}).listen(3000,'localhost');

console.log('El servidor se muestra en http://localhost:3000');
