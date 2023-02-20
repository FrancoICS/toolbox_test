const router = require('express').Router();
const FilesDatacontroller = require('../controllers/FilesDataController');
const FilesListcontroller = require('../controllers/FilesListController');

router.get("/files/data", FilesDatacontroller.FilesDataController);

router.get("/files/list", FilesListcontroller.FilesListController);


module.exports = router;