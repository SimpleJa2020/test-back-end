const { validateDocument } = require('../validators/document-validator');
const { Document } = require('../models');
const { Op } = require('sequelize');

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

exports.getTotalRecord = async (req, res, next) => {
    try {
        const startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        const endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        const document = await Document.count({
            where: {
                createdAt: {
                    [Op.gt]: startDate,
                    [Op.lt]: endDate
                }
            }
        });
        res.status(200).json(document);
    } catch (err) {
        next(err);
    }
};

exports.getRecordDaily = async (req, res, next) => {
    try {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 7);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        const endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        const document = await Document.findAndCountAll({
            where: {
                createdAt: {
                    [Op.gt]: startDate,
                    [Op.lt]: endDate
                }
            }
        });
        res.status(200).json(document);
    } catch (err) {
        next(err);
    }
};
