var mongoose = require('mongoose');

var repSchema = mongoose.Schema({
    name:       {type : String},
    note:     {type : String},
    date: {type : String},

});


module.exports = mongoose.model('Call', callSchema);
