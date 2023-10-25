const express = require('express');
const productsRouter = require('./components/products/network');
const categoriesRouter = require('./components/categories/network');
const usersRouter = require('./components/users/network');

function apiRouter(app) {
  const baseRouterV1 = express.Router();
  app.use('/api/v1', baseRouterV1);
  baseRouterV1.use('/products', productsRouter);
  baseRouterV1.use('/categories', categoriesRouter);
  baseRouterV1.use('/users', usersRouter);
}

module.exports = apiRouter;