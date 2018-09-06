let mongoose = require('mongoose');

module.exports = mongoose.model('AdressDetails', {
    name: String,
    phone: String,
    email: String,    
    address: String,    
});