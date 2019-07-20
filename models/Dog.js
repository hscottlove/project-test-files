const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
	name: { type: String },
	breed: { type: String },
	age: { type: Number },
	image: { type: String },
	location: { type: String },
	description: { type: String },
});

const Dog = mongoose.model('Dog', DogSchema);

module.exports = Dog;
