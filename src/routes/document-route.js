const express = require('express');
const documentController = require('../controllers/document-controller');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/', upload.single('image'), documentController.saveDocument);
router.get('/documents', documentController.searchDocument);
router.get('/:documentId', documentController.getDocumentById);
router.get('/', documentController.getTotalRecord);

module.exports = router;
