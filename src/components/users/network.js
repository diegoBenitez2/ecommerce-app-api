const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (!limit || !offset) {
    res.status(400).json({
      message: 'limit and offset params are required',
    })
    return;
  }
  res.status(200).json({
    limit,
    offset,
  })
});

module.exports = router;