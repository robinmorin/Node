var servidor=require("./servidor");
var enrutador=require("./enrutador");
var peticiones=require("./peticiones");

var manejador = {}
manejador['/inicio'] = peticiones.inicio;
manejador['/pagina1'] = peticiones.pagina1;
manejador['/pagina2'] = peticiones.pagina2;
manejador['/prueba'] = peticiones.prueba;
manejador['/favicon.ico'] = peticiones.favicon;

servidor.iniciar(enrutador.enrutar, manejador);

