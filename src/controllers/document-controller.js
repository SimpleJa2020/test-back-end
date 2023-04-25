const { validateDocument } = require('../validators/document-validator');
const { Document } = require('../models');

exports.save = async (req, res, next) => {
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
