var mongoose = require('mongoose');

let hotels_Schema  = new mongoose.Schema({
	id: String,
	name: String,
	stars: String,
	price: String,
	image: String,
	amenities: Array
}, { collection: 'hotel' });

let Hotel= mongoose.model('hotel', hotels_Schema );

module.exports = Hotel;