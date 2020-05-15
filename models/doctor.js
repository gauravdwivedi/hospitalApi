const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

    
    
const requiredString = {
    type: String,
    required:true,
}
    
const doctorSchema = new Schema({
    
    username: requiredString,
    email: {
        type:String,
        unique:true,
    },
    password: requiredString,
}, {
    timestamps:true
});


const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;