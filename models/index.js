const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Dogs', { useNewUrlParser: true });

module.exports = {
	Dog: require('./Dog'),
};
