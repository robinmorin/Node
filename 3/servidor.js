var servidor= require('http');
var url= require('url');
var fs = require('fs');


function iniciar(enrutar,manejador){
	function arrancaServidor(requiere, respuesta){
		
		var ruta = url.parse(requiere.url).pathname;
	
		console.log("Alguien se ha conectado");
		
		var contenido = enrutar(manejador,ruta);
		
		var registro = fs.createWriteStream('registro.txt',{'flags':'a'});
		registro.write(ruta+'\n');

		if(contenido.indexOf(".html") == -1){
			respuesta.writeHead(200,{"Content-type":"text/html"});
			respuesta.write("<h1>" + contenido + "</h1>");
			respuesta.end();
		} else {
			respuesta.writeHead(200,{"Content-type":"text/html"});
			respuesta.write(fs.readFileSync(contenido));
			respuesta.end();
		}
		
	}
	servidor.createServer(arrancaServidor).listen(8090);
}

exports.iniciar=iniciar;
