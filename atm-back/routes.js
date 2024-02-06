const express = require('express');
const router = express.Router();
const user = require('./User/user');

router.post('/addUser', user.addUser);
router.get('/getUserDetails/:acc_no',user.getUserDetails);
router.post('/debitMoney',user.debitMoney);

module.exports = router;