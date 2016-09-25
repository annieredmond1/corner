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
	quote: { type: String, required: false},
	resources: { type: String, required: false}
});


var Supporter = mongoose.model('Supporter', SupporterSchema);



module.exports = Supporter;


















