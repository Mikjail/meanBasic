var mongoose = require('mongoose');

module.exports = mongoose.model('Hotel', {
	id: String,
	name: String,
	stars: String,
	price: String,
	image: String,
	amenities: String
});