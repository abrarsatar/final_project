// Headquarters controller
// Route handlers dealing with hqs

var HQ = require('../models/hq');

module.exports = {
    get : (req, res) => {
        if(req.params.id){
            // Find One
            HQ.findOne({ _id : req.params.id }, function(err, hq){
                res.json(hq);
            });
        }
        else{
            // Find Many
            HQ.find({}, function(err, hqs){
                res.json(hqs);
            });
        }
    },
    upsert : (req, res) =>{
        if(req.params.id){
            // Update
        }
        else{
            // Create
            var newHQ = new HQ(req.body);
            newHQ.save(function(err, doc){
                // res.json({success : 'HQ successfully added!'});
                res.json(doc);
            });
        }
    }
}
