var Hotel = require('./modelo/hotel');

// Obtiene todos los objetos Hotel de la base de datos
const getHotel = (req, res) =>{
	Hotel.find({},
		(err, Hotel) => {
			console.log(Hotel);
			console.log(err);
			if (err)
				res.send(err)
					res.json(Hotel); // devuelve todas las Hotels en JSON		
				}
			);
}

// Obtiene Hotel de la base de datos por id
const getHotelById = (req, res) =>{
	Hotel.find({_id : req.params.Hotel_id},
		(err, Hotel) => {
			if (err)
				res.send(err)
					res.json(Hotel); // devuelve todas las Hotels en JSON		
				}
			);
}
// Obtiene Hotel de la base de datos por name
const hotelByNameAndStar = (req, res) =>{
	// console.log(req.query);
	// console.log(searchCriteria);
	// console.log()
	let searchCriteria = new SearchCriteria();
	if(req.query.name && req.query.name != '' && req.query.star){
		searchCriteria.setHotelNameAndStar(req.query.name,req.query.star);
	}
	else{
		if(req.query.name) searchCriteria.setHotelName(req.query.name);
		if(req.query.star) searchCriteria.setHotelStar(req.query.star);		
	}
	console.log(searchCriteria.build());
	Hotel.find(searchCriteria.build(),
		(err, Hotel) => {
			console.log(Hotel)
			if (err)
				res.send(err)
					res.json(Hotel); // devuelve todas las Hotels en JSON		
				}
			);
}

function SearchCriteria (){
	this.search=  {};

	 this.build = function(){
		 return this.search;
	 };
	 
	 this.setHotelName = function(name) {
		 console.log(this.search);
		if(!this.search.name) this.search.name = {};
		 this.search.name = { $regex: new RegExp('.'+name+'.','i')};	
	}

	 this.setHotelStar = function(star) {
		if(!this.search.stars) this.search.stars = {}
		
		this.search.stars= star;
	};

	this.setHotelNameAndStar= function(name, stars) {
		if(!this.search.$or) this.search.$or = []
		if(stars.length>1){
			stars.forEach((star)=>{
				this.search.$or.push({ name: { $regex: new RegExp('.'+name+'.','i')},  stars: star })
			})
		}else{
			this.search = { name: { $regex: new RegExp('.'+name+'.','i')}, stars: stars } ;
		}
	}
}

// Obtiene Hotel de la base de datos por name
const hotelByName = (req, res) =>{
	Hotel.find({_name : req.params.Hotel_name},
		(err, Hotel) => {
			if (err)
				res.send(err)
					res.json(Hotel); // devuelve todas las Hotels en JSON		
				}
			);
}

// Obtiene Hotel de la base de datos por start
const getHotelByStart = (req, res) =>{
	Hotel.find({_start : req.params.Hotel_start},
		(err, Hotel) => {
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
			(err, Hotel) => {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las Hotels tras crear una de ellas
				Hotel.find((err, Hotel) => {
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
					(err, Hotel) => {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las Hotels tras crear una de ellas
				Hotel.find((err, Hotel) => {
				 	if (err)
				 		res.send(err)
				 	res.json(Hotel);
				});
			});
	}

// Elimino un objeto Hotel de la base de Datos
const removeHotel = function(req, res) {
	Hotel.remove({_id : req.params.Hotel_id}, (err, Hotel) => {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las Hotels tras borrar una de ellas
			Hotel.find((err, Hotel) => {
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
	removeHotel : removeHotel,
	hotelByNameAndStar: hotelByNameAndStar
}