let mongoose = require('mongoose');

module.exports = mongoose.model('Address', {
    Id : 0,
    AddressName: String,
    Address: String,
    AdressPostalCode: String,    
});