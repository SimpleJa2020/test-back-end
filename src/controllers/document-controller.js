const { validateDocument } = require('../validators/document-validator');
const { Document } = require('../models');

exports.saveDocument = async (req, res, next) => {
    try {
        const value = validateDocument({
            image: req.file.path,
            number: req.body.number,
            customerName: req.body.customerName
        });

        const document = await Document.create(value);

        res.status(201).json({ document });
    } catch (err) {
        next(err);
    }
};

exports.searchDocument = async (req, res, next) => {
    try {
        const document = await Document.findAll({
            attributes: {
                exclude: ['updatedAt']
            },
            order: [['createdAt', 'DESC']],
            limit: 10
        });
        res.status(200).json({ document });
    } catch (err) {
        next(err);
    }
};

exports.getDocumentById = async (req, res, next) => {
    try {
        const { documentId } = req.params;
        const document = await Document.findAll({
            where: { id: documentId },
            attributes: {
                exclude: ['updatedAt']
            }
        });
        res.status(200).json({ document });
    } catch (err) {
        next(err);
    }
};

// ฟังก์ชันที่ใช้ในการ Query ครับ //
/*
exports.getTotalRecord = async (req, res, next) => {
    try {
        const document = await Document.count();
        console.log(document);
        res.status(200).json();
    } catch (err) {
        next(err);
    }
};

exports.getRecordDaily = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};
*/
