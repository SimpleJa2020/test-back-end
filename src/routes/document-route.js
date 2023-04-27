const express = require('express');
const documentController = require('../controllers/document-controller');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/', upload.single('image'), documentController.saveDocument);
router.get('/documents', documentController.searchDocument);
router.get('/totalRecord', documentController.getTotalRecord);
router.get('/recordDaily', documentController.getRecordDaily);
router.get('/:documentId', documentController.getDocumentById);

module.exports = router;
