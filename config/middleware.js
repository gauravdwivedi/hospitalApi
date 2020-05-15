const jwt = require('jsonwebtoken');
//Format of token
//Authorizaiton : Bearer <access_token>


//verify token
const verifyToken = async function (req, res, next) {
    
   
    const bearerHeader = req.headers['authorization'];

    //check if bearer is undefined

    if (typeof bearerHeader !== 'undefined') { 
        //split at the space
        const bearer = bearerHeader.split(' ');

        //get token from array
        const bearerToken = bearer[1];

        //set the token
        req.token = bearerToken;
    }
       
    
    try{
        
       let tokenValue = await jwt.verify(req.token, 'hospitalapi');

        console.log(tokenValue);
        if (tokenValue) {
            //Next middleware
            req.tokenValue =tokenValue;
            next();
        } else {
            return res.status(500).json({
                success: false,
                message: "Unauthroized access",
            });
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }

}


module.exports = verifyToken;