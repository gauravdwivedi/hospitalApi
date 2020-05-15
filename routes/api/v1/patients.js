const { Router } = require('express');
const router = Router();
const patientController = require('../../../controllers/api/v1/patient_controller');
const verify = require('../../../config/middleware');
const passport = require('passport');


router.post('/register', verify, patientController.register);
router.post('/:id/create_report', verify, patientController.create_report);
router.get('/:id/all_reports',  patientController.all_reports);

module.exports = router;