const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');
module.exports.register = async function(req,res) {
    try {

      const doctor=  await Doctor.create(req.body);
        
        return res.status(200).json({
            success: true,
            message:doctor
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message:err.message
        });
    }
 }


module.exports.login = async (req,res) => {
     
    try {
     let doctor = await Doctor.findOne({ email: req.body.email });

        if (doctor) {
            if (doctor.password == req.body.password) {
                jwt.sign({ doctor }, 'hospitalapi', {expiresIn:'1000s'}, (err, token) => {
                    res.json({
                        token
                    });
                })
             }
        }
}catch (err) {
    return res.status(500).json({
        success: false,
        message:err.message
    });
}

 } 