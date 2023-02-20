const router = require('express').Router();
const controller = require('../controllers/FilesDataController');

router.get("/files/data", controller.FilesDataController);


module.exports = router;