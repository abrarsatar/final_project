var Call = require('../models/call');
module.exports = {
    get : (req, res) => {
        Call.find({},function(err, calls){
          res.json(calls);
      });
    },
    upsert : (req, res) =>{
        if(req.params.id){
        }
        else {
          console.log(req.body);
            var newCall = new Call(req.body);
            newCall.save(function(err, call){
                if(err){
                    return res.json(err);
                }
                res.json(call);
            });
        }
    },
}
