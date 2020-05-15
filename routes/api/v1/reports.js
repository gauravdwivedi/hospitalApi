const { Router } = require('express');
const router = Router();
const reportController = require('../../../controllers/api/v1/report_controller');
const verify = require('../../../config/middleware');
const passport = require('passport');


router.get('/:status',  reportController.report_by_status);

module.exports = router;