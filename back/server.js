// Inicialización
var express  = require('express');
var app      = express(); 					// Utilizamos express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var port  	 = process.env.PORT || 5000; 			// Cogemos el puerto 5000
var cors = require('cors') //libreria para habilitar el cors.


// Configuracion
mongoose.connect('mongodb://localhost:27017/Most', {
	useMongoClient: true
  }); 	// Hacemos la conexión a la base de datos de Mongo con nombre "Most"

app.use(cors())
app.use('/',
  express.static(
  'dist'
  )
)
  
let  db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Cargamos los endpoints
require('./routes.js')(app);

// Cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto " + port);