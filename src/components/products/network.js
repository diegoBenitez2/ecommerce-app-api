const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  const {size} = req.query
  const products = [];
  while(products.length < (size || 3)) {
    products.push({
      name: faker.commerce.productName(),
      price: +faker.commerce.price(),
      image: faker.image.url(),
    })
  }
  res.json(products)
})

router.get('/:id', (req, res) => {
  const { id  } = req.params
  res.json({
    id,
    name: `product ${id}`,
    price: 100 * id,
  })
})

router.post('/', (req, res) => {
  const { body } = req;
  res.status(201).json({
      message: 'created',
      data: body,
  })
});

module.exports = router;