const mongoose = require('mongoose');
const { Schema } = mongoose;


const patientSchema = new Schema({
    
    phone: {
        type: Number,
        maxlength:10,
        required: true,
        unique:true,
    },
    name: {
        type: String,
        required:true,
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref:'Doctor'
    }
});


const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;