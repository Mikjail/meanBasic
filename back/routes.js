var Hotel = require('./modelo/hotel');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todos los Hotel
	app.get('/api/hotel', Controller.getHotel);
	// Crear un nuevo Hotel
	app.post('/api/hotel', Controller.setHotel);
	// Modificar los datos de un Hotel
	app.put('/api/hotel/:hotel_id', Controller.updateHotel);
	// Borrar un Hotel
	app.delete('/api/hotel/:hotel_id', Controller.removeHotel);
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./front/index.html'); 
	});
};