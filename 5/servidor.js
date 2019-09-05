var servidor= require('http');
var url= require('url');
var fs = require('fs');


function iniciar(enrutar,manejador){
	function arrancaServidor(requiere, respuesta){
		
		var ruta = url.parse(requiere.url).pathname;
	
		if(ruta == '/') ruta = "index.html";
		
		console.log("Alguien se ha conectado");
		
		//var contenido = enrutar(manejador,ruta,fs);

		var index = fs.readFileSync('www/'+ruta);
		
		var registro = fs.createWriteStream('registro.txt',{'flags':'a'});
		registro.write(ruta+'\n');
		
		respuesta.writeHead(200,{"Content-type":"text/html"});
		respuesta.write(index);
		respuesta.end();
	}
	servidor.createServer(arrancaServidor).listen(8090);
}

exports.iniciar=iniciar;
