const express = require('express');

const router = express.Router();

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json(
    {
      id: categoryId,
      name: `category ${categoryId}`,
    })
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId  } = req.params;
  res.json(
    {
      id: productId,
      name: `product 1 of category ${categoryId}`,
      price: 100,
    })
})

module.exports = router;