var mongoose = require('mongoose');
module.exports = mongoose.model('Reviews', {"postedbyId" : String, "postedDate" : Date, "category" : String, "posttitle" :String, "postdesc" : String, "approved" : String}); //reviews table


