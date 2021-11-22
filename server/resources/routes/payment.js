require('dotenv').config();
var router = require('express').Router();

router.route('/paypal', async function (req, res, next) {
	res.json({ status: 200, key: process.env.PAYPAL_CLIENT_ID || 'sb' });
});

module.exports = router;
