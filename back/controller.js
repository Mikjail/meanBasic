var Hotel = require('./modelo/hotel');

// Obtiene todos los objetos Hotel de la base de datos
const getHotel = function (req, res){
	Hotel.find({},
		function(err, Hotel) {
			console.log(Hotel);
			console.log(err);
			if (err)
				res.send(err)
					res.json(Hotel); // devuelve todas las Hotels en JSON		
				}
			);
}

// Obtiene Hotel de la base de datos por id
const getHotelById = function (req, res){
	Hotel.find({_id : req.params.Hotel_id},
		function(err, Hotel) {
			if (err)
				res.send(err)
					res.json(Hotel); // devuelve todas las Hotels en JSON		
				}
			);
}

// Obtiene Hotel de la base de datos por name
const hotelByName = function (req, res){
	Hotel.find({_name : req.params.Hotel_name},
		function(err, Hotel) {
			if (err)
				res.send(err)
					res.json(Hotel); // devuelve todas las Hotels en JSON		
				}
			);
}

// Obtiene Hotel de la base de datos por start
const getHotelByStart = function (req, res){
	Hotel.find({_start : req.params.Hotel_start},
		function(err, Hotel) {
			if (err)
				res.send(err)
					res.json(Hotel); // devuelve todas las Hotels en JSON		
				}
			);
}

// Guarda un objeto Hotel en base de datos
const setHotel = function(req, res) {

		// Creo el objeto Hotel
		Hotel.create(
			{name : req.body.name,stars: req.body.stars, price: req.body.price,image: req.body.image,amenities: req.body.amenities}, 
			function(err, Hotel) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las Hotels tras crear una de ellas
				Hotel.find(function(err, Hotel) {
				 	if (err)
				 		res.send(err)
				 	res.json(Hotel);
				});
			});

	}

// Modificamos un objeto Hotel de la base de datos
const updateHotel = function(req, res){
	Hotel.update( {_id : req.params.Hotel_id},
					{$set:{name : req.body.name,stars: req.body.stars, price: req.body.price,image: req.body.image,amenities: req.body.amenities}}, 
					function(err, Hotel) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las Hotels tras crear una de ellas
				Hotel.find(function(err, Hotel) {
				 	if (err)
				 		res.send(err)
				 	res.json(Hotel);
				});
			});
	}

// Elimino un objeto Hotel de la base de Datos
const removeHotel = function(req, res) {
	Hotel.remove({_id : req.params.Hotel_id}, function(err, Hotel) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las Hotels tras borrar una de ellas
			Hotel.find(function(err, Hotel) {
				if (err)
					res.send(err)
				res.json(Hotel);
			});
		});
}

module.exports = {
	getHotel : getHotel,
	getHotelById: getHotelById,
	hotelByName : hotelByName,
	getHotelByStart : getHotelByStart,
	setHotel : setHotel,
	updateHotel: updateHotel,
	removeHotel : removeHotel
}