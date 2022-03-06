'use strict';
const { Model } = require('sequelize');
const moment = require('moment');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      ten: DataTypes.STRING,
      mota: DataTypes.STRING,
      ngay_nhap: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue('ngay_nhap')).format(
            'DD/MM/YYYY H:mm:ss'
          );
        },
        set(value) {
          // Storing passwords in plaintext in the database is terrible.
          // Hashing the value with an appropriate cryptographic hash function is better.
          this.setDataValue(
            'ngay_nhap',
            moment(value, [
              'DD/MM/YYYY H:mm:ss',
              'YYYY-MM-DD H:mm:ss',
            ])
          );
        },
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
