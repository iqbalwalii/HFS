const express = require('express');
const cors = require('cors');
require('dotenv').config();

var next = require('next');
var { json, urlencoded } = require('body-parser');
var productsRouter = require('../server/resources/routes/products');
var adminRouter = require('../server/resources/routes/admin');
var orderRouter = require('../server/resources/routes/orders');
var paymentRouter = require('../server/resources/routes/payment');
var userRouter = require('../server/resources/routes/user');
var seedRouter = require('../server/utils/seederScript');
var verifyUser = require('./utils/verifyUser');
var postRouter = require('../server/resources/routes/posts');

// local imports
const db = require('./utils/db');

// server config
const port = process.env.PORT || 3000;

// NEXT config
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// nextapp setup and routes
app.prepare().then(async () => {
	const server = express();
	await db.connect();

	// const corsOptions = {
	// 	origin: '*',
	// };
	var allowlist = [
		'http://localhost:3000',
		'https://hfsociety.herokuapp.com/',
	];
	var corsOptionsDelegate = function (req, callback) {
		var corsOptions;
		if (allowlist.indexOf(req.header('Origin')) !== -1) {
			corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
		} else {
			corsOptions = { origin: false }; // disable CORS for this request
		}
		callback(null, corsOptions); // callback expects two parameters: error and options
	};

	server.use(cors(corsOptionsDelegate));
	server.use(json());
	server.use(urlencoded({ extended: true }));
	server.use(express.static('./src/public'));
	server.use('/api/products', productsRouter);
	server.use('/api/admin/blog-posts', postRouter);
	server.use('/api/admin', adminRouter);
	server.use('/api/users', userRouter);
	server.use('/api/keys/paypal', async function (req, res, next) {
		await verifyUser(req, res, next);
		res.json({
			status: 200,
			clientId: process.env.PAYPAL_CLIENT_ID || 'sb',
		});
	});
	server.use('/api/orders', orderRouter);

	// next handler for other routes
	server.get('*', (req, res) => {
		return handle(req, res);
	});
	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`Ready on http://localhost:${port}`);
	});
});
