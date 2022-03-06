const db = require('../models/index');

const gettAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const productList = await db.Product.findAll();
      resolve(productList);
    } catch (error) {
      reject(error);
    }
  });
};

const add = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await db.Product.create({
        ten: data.ten,
        mota: data.mota,
        ngay_nhap: data.ngay_nhap,
      });
      resolve(product);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  gettAll,
  add,
};
