function inicio(respuesta){
	console.log("Has entrado la pagina de inicio");

	var ahora = new Date().getTime();
	while(new Date().getTime() < ahora + 10000);	

	respuesta.writeHead(200,{"Content-type":"text/html"});
	respuesta.write("<h1>Esta es la pagina de Inicio</h1>");
	respuesta.end();

}

function pagina1(respuesta){
	console.log("Has entrado la pagina numero 1");
	respuesta.writeHead(200,{"Content-type":"text/html"});
	respuesta.write("<h1>Esta es la pagina numero 1</h1>");
	respuesta.end();

}

function pagina2(respuesta){
	console.log("Has entrado la pagina numero 2");
	respuesta.writeHead(200,{"Content-type":"text/html"});
	respuesta.write("<h1>Esta es la pagina numero 2</h1>");
	respuesta.end();

}

function favicon(respuesta){
	respuesta.writeHead(200,{"Content-type":"text/html"});
	respuesta.write("");
	respuesta.end();
}

exports.inicio=inicio;
exports.pagina1=pagina1;
exports.pagina2=pagina2;
exports.favicon=favicon;

