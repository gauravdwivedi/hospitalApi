const Patient = require('../../../models/patient');
const Report = require('../../../models/report');

module.exports.register = async (req, res) => {

    console.log('inside patient controller');
       try {

        let patient = await Patient.findOne({ phone: req.body.phone });

           console.log(patient);

        if (patient) {
            
            return res.status(200).json({
                success:'Patient Already registered',
                message: patient
            });
        } else {
            const doctor_id = req.tokenValue._id;
            patient = await Patient.create({
                phone: req.body.phone,
                name: req.body.name,
                doctor:doctor_id
            });
            return res.status(200).json({
                success: true,
                message: patient
            });
        }
    } catch (err) {
        
        return res.status(500).json({
            message: err.message
        });
    }
}

module.exports.create_report = async (req, res)=>{
    
    console.log(req.params.id);
    try {
        
        console.log(req.tokenValue);
        const doctor_id = req.tokenValue._id;
        
        const report = await Report.create({
            doctor: doctor_id,
            patient: req.params.id,
            status: req.body.status
        });

        console.log(report);

        return res.status(200).json({
            success: true
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }

}

module.exports.all_reports = async (req,res) => { 

    try {
        
        const reports = Report.find({ "patient": req.params.id });


        reports.exec(function (err, rep) {
            return res.send(rep);
        })
    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }

}

