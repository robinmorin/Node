var servidor= require('http');
var url= require('url');
var fs = require('fs');


function iniciar(enrutar,manejador){
	function arrancaServidor(requiere, respuesta){
		
		var ruta = url.parse(requiere.url).pathname;
	
		console.log("Alguien se ha conectado");
		
		var contenido = enrutar(manejador,ruta,respuesta);
		
		var registro = fs.createWriteStream('registro.txt',{'flags':'a'});
		registro.write(ruta+'\n');
		
		/*respuesta.writeHead(200,{"Content-type":"text/html"});
		respuesta.write("<h1>" + contenido + "</h1>");
		respuesta.end();*/
	}
	servidor.createServer(arrancaServidor).listen(8080);
}

exports.iniciar=iniciar;
