const express = require('express');
const documentController = require('../controllers/document-controller');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/', upload.single('image'), documentController.save);

module.exports = router;
