let mongoose = require('mongoose');

module.exports = mongoose.model('AdressDetails', {
    AddressName: String,
    Address: String,
    AdressPostalCode: String,    
});