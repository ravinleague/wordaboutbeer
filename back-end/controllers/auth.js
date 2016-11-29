var User = require('../models/User');
module.exports={
    register:function(req,res){
        User.findOne({email:req.body.email},function(err,existingUser){
                     if(existingUser){
            return res.status(409).send({message:'Email is already registered'})
        }
            var user = new User(req.body);
            user.save(function(err,result){
              if(err){
                  res.status(500).send({
                      message:err.message
                  });
              }
                return res.status(200).send({message:'Account Added Successfully'})
            });

         });
    },

    getRegisteredUsers:function(req,res){
        User.find({},function(err,registeredUsers){
            res.send(registeredUsers);
         });
    }
}
