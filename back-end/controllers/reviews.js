var Review = require('../models/Review');
module.exports={
    getUserReviews:function(req,res)
    {

        Review.find({},function(err,reviews){
            res.send(reviews);
        });

    }
    }
