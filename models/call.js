var mongoose = require('mongoose');

var callSchema = mongoose.Schema({
    type:       {type : String},
    note:     {type : String},
    date: {type : String},

});


module.exports = mongoose.model('Call', callSchema);
