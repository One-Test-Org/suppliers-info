const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line


router.post('/index', function (req, res) {
  res.redirect('success');
});

module.exports = router;
