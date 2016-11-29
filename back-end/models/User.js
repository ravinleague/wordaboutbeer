var mongoose = require('mongoose');
module.exports = mongoose.model('User',{'fName':String,'lName':String,'email':String,'password':String}); //registratoion table
