const Report = require('../../../models/report');


module.exports.report_by_status = async (req,res) => {

    try {

        const reports = Report.find({ "status": req.params.status });

        reports.exec(function (err, rep) {
            return res.send(rep);
        });
        

    } catch (err) { 

        return res.status(500).json({
            message: err.message
        });
    }

}