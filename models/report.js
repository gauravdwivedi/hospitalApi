const mongoose = require('mongoose');
const { Schema } = mongoose;

const reportSchema = new Schema({
    
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },

    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },

    status: {
        type: String,
        required: true,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
    },
    
    date: {
        type: Date,
        default: Date.now,
        required: true,
    }
},
    {
    timestamps: true
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;