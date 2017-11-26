var Hotel = require('./modelo/hotel');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todos los Hoteles
	app.get('/api/hotel', Controller.getHotel);
	// devolver hotel por id
	app.get('/api/hotelById', Controller.getHotelById);
	// devolver hotel por name
	app.get('/api/hotelByName', Controller.hotelByName);
	// devolver hotel por start
	app.get('/api/hotelByStart', Controller.getHotelByStart);
	// Crear un nuevo Hotel
	app.post('/api/hotel', Controller.setHotel);
	// Modificar los datos de un Hotel
	app.put('/api/hotel/:hotel_id', Controller.updateHotel);
	// Borrar un Hotel
	app.delete('/api/hotel/:hotel_id', Controller.removeHotel);
	// application 
	app.get('*', function(req, res) {
		res.sendFile('/Users/mikjailsalazar/Desktop/workshops/almundo/most/front/index.html'); 
	});
};