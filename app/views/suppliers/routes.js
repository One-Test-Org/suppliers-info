const express = require('express')
const router = express.Router()
const path = require('node:path')

// Add your routes here - above the module.exports line

router.post('/signin-success', function (req, res) {
    res.redirect('test');
});

module.exports = router