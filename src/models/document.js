module.exports = (sequelize, DataTypes) => {
    const Document = sequelize.define(
        'Document',
        {
            image: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            recordDate: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },

            number: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    is: /^[0-9]{10}$/
                }
            },

            customerName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            }
        },
        {
            underscored: true
        }
    );
    return Document;
};
