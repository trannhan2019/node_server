const productService = require('../services/productService');

const getAll = async (req, res) => {
  try {
    const data = await productService.gettAll();
    res.status(200).send({
      errCode: 0,
      errMessage: 'OK',
      data,
    });
  } catch (error) {
    res.status(500).send({
      errCode: 1,
      errMessage: error.message || 'Loi server',
    });
  }
};

const add = async (req, res) => {
  try {
    const product = {
      ten: req.body.ten,
      mota: req.body.mota,
      ngay_nhap: req.body.ngay_nhap,
    };
    const data = await productService.add(product);
    res.status(200).send({
      errCode: 0,
      errMessage: 'OK',
      data,
    });
  } catch (error) {
    res.status(500).send({
      errCode: 1,
      errMessage: error.message || 'Loi server',
    });
  }
};

module.exports = {
  getAll,
  add,
};
