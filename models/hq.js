// Headquarters model

var mongoose = require('mongoose');

var hqSchema = mongoose.Schema({
    name:      {type: String},
    amenities: {type: Array},
    butler:    {type: Boolean},
    moatType:  {type: String},
    // heroes : [
    //     {type : mongoose.Schema.ObjectId, ref : 'Hero'}
    // ]

    // constructionDate : {type : Date}
    // Sample Address
    // address : {
    //     street1 : String,
    //     street2 : String,
    //     city    : String,
    //     state   : String,
    //     zip     : String
    // }
});

module.exports = mongoose.model('HQ', hqSchema);
