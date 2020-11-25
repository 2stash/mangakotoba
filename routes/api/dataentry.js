const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    get 
// @access  private
router.get('/', (req,res) => res.send('dataentry route'))


module.exports = router;