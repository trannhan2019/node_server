const express = require('express');

const router = express.Router();

const tutorialController = require('../controllers/tutorialController');
const productController = require('../controllers/productController');

const initApiRoutes = (app) => {
  //Tutorial
  router.get('/tutorials', tutorialController.getAll);
  router.post('/tutorials', tutorialController.create);
  router.patch('/tutorials/:id', tutorialController.edit);

  //Product
  router.get('/products', productController.getAll);
  router.post('/products', productController.add);

  app.use('/api', router);
};

module.exports = initApiRoutes;
