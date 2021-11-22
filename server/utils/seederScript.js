// const db = require('./db');
// const Product = require('../resources/models/product');
// const User = require('../resources/models/user');
// const router = require('express').Router();
// const data = require('../../src/utils/data');

// //
// async function seed(req, res) {
// 	try {
// 		await db.connect();
// 		await Product.deleteMany();
// 		await Product.insertMany(data.products);
// 		console.log('prod', Product.find({}));
// 		await User.deleteMany();
// 		await User.insertMany(data.users);
// 		console.log('User', User.find({}));
// 		await db.disconnect();
// 		res.json({ status: 201, message: 'seeded successfully' });
// 	} catch (err) {
// 		res.json({
// 			status: 500,
// 			message: err,
// 		});
// 	}
// }

// router.route('/').post(seed);
// module.exports = router;
