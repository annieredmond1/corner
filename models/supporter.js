var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var SupporterSchema = new Schema ({
	active: { type: Boolean, required: true, default: true },
	firstName: {type: String, required: true},
	createdAt: { type: Date, default: Date.now },
	image_url: { type: String, required: false},
	email: { type: String, unique: true, required: true},
	tagline: { type: String, required: true},
	experience: { type: String, required: true},
	quote: { type: String, required: true},
	hardship: { type: String, required: true},
	encouragement: { type: String, required: true}
});


var Supporter = mongoose.model('Supporter', SupporterSchema);



module.exports = Supporter;


















