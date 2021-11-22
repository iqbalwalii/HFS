require('dotenv').config();

const db = require('../../utils/db');
const verifyUser = require('../../utils/verifyUser');

const bcrypt = require('bcryptjs');
const generateToken = require('../../utils/jwtTokenGenerator');
const Order = require('../models/order');
const Product = require('../models/product');
const router = require('express').Router();
const multer = require('multer');
const User = require('../models/user');
const streamifier = require('streamifier');
const { v2 } = require('cloudinary');

// cloudinary.config
v2.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_KEY,
	api_secret: process.env.CLOUD_SECRET,
});

const upload = multer();

// --- UPDATE ORDER STATUS --- //
async function updateOrderStatus(req, res) {
	console.log(req);
	console.log('++++++++++++');
	const { orderId } = req.params;
	console.log('id', orderId);
	console.log(req.query);
	try {
		await db.connect();
		const order = await Order.findById(orderId);
		console.log('Status order', order);
		if (order) {
			(order.isDelivered = true), (order.deliveredAt = Date.now());

			const updatedOrder = await order.save();
			await db.disconnect();
			res.json({ status: 200, order: updatedOrder });
		} else {
			await db.disconnect();
			res.json({ status: 404, message: ' Order not found' });
		}
	} catch (err) {
		await db.disconnect();

		res.json({
			status: 500,
			message: err.toString(),
		});
	}
}

// --- GET ALL ORDERS WITH USERNAME FILL --- //
async function getOrders(req, res) {
	const user = req.user;
	if (user.extra) {
		try {
			console.log('get orders');
			await db.connect();
			const orders = await Order.find({}).populate('user', 'name');
			console.log('get orders', orders);
			await db.disconnect();
			res.json({
				status: 200,
				orders,
			});
		} catch (err) {
			await db.disconnect();
			res.json({
				status: 500,
				message: err,
			});
		}
	} else {
		res.json({
			status: 401,
			message: 'You are not authorized',
		});
	}
}

// --- GET ALL PRODUCTS --- //
async function getProducts(req, res) {
	const user = req.user;
	if (user.extra) {
		try {
			console.log('get products');
			await db.connect();
			const products = await Product.find({});
			console.log('get products', products);
			await db.disconnect();
			res.json({
				status: 200,
				products,
			});
		} catch (err) {
			await db.disconnect();
			res.json({
				status: 500,
				message: err,
			});
		}
	} else {
		res.json({
			status: 401,
			message: 'You are not authorized',
		});
	}
}

//---- GET SUMMARY  ----//
async function getSummary(req, res) {
	const user = req.user;
	if (user.extra) {
		console.log('user', user);
		try {
			await db.connect();
			const ordersCount = await Order.countDocuments();
			console.log('ordersCount', ordersCount);
			const usersCount = await User.countDocuments();
			console.log('usersCount', usersCount);
			const productsCount = await Product.countDocuments();
			console.log('productsCount', productsCount);
			const ordersPriceGroup = await Order.aggregate([
				{
					$group: {
						_id: null,
						sales: { $sum: '$totalAmount' },
					},
				},
			]);
			console.log('ordersPriceGroup', ordersPriceGroup);

			const ordersPrice =
				ordersPriceGroup.length > 0 ? ordersPriceGroup[0].sales : 0;

			console.log('ordersPrice', ordersPrice);
			const salesData = await Order.aggregate([
				{
					$group: {
						_id: {
							$dateToString: {
								format: '%Y-%m',
								date: '$createdAt',
							},
						},
						totalSales: { $sum: '$totalAmount' },
					},
				},
			]);

			console.log('salesData', salesData);
			await db.disconnect();
			res.json({
				status: 200,
				data: {
					productsCount,
					ordersCount,
					usersCount,
					salesData,
					ordersPrice,
				},
			});
		} catch (err) {
			await db.disconnect();
			res.json({
				status: 500,
				message: err,
			});
		}
	} else {
		res.json({
			status: 401,
			message: 'You are not authorized',
		});
	}
}

//---- GET SINGLE PRODUCT  ----//
async function getProduct(req, res) {
	console.log('id', req.query);
	console.log('id', req.params);
	const { productId } = req.params;
	if (req.user.extra) {
		try {
			await db.connect();
			const product = await Product.findOne({ _id: productId }).exec();
			await db.disconnect();
			if (!product) {
				return res.json({ status: 404, message: 'No product Found' });
			}
			res.json({ status: 200, product: product });
		} catch (err) {
			res.json({
				status: 500,
				message: err,
			});
		}
	} else {
		res.json({
			status: 401,
			message: 'You are not authorized',
		});
	}
}

//----UPDATE SINGLE PRODUCT  ----//
async function updateProduct(req, res) {
	const { productId } = req.params;
	console.log('id', productId);

	if (req.user.extra) {
		try {
			let data = {};
			if (req.body.name) {
				data.name = req.body.name;
			}
			if (req.body.price) {
				data.price = req.body.price;
			}
			if (req.body.slug) {
				data.slug = req.body.slug;
			}
			if (req.body.category) {
				data.category = req.body.category;
			}
			if (req.body.brand) {
				data.brand = req.body.brand;
			}
			if (req.body.countInStock) {
				data.countInStock = req.body.countInStock;
			}
			if (req.body.image) {
				data.image = req.body.image;
			}
			if (req.body.description) {
				data.description = req.body.description;
			}
			await db.connect();
			const product = await Product.findOneAndUpdate(
				{ _id: productId },
				data,
				{ new: true }
			);
			await db.disconnect();
			console.log('product', product);
			res.json({ status: 200, product });
		} catch (err) {
			await db.disconnect();
			res.json({
				status: 500,
				message: err.toString(),
			});
		}
	} else {
		res.json({
			status: 401,
			message: 'Unauthorized access',
		});
	}
}
// UPLOAD TO CLOUDINARY
async function uploadFile(req, res) {
	if (req.user.extra) {
		try {
			const streamUpload = (req) => {
				return Promise((resolve, reject) => {
					const stream = v2.uploader.upload_stream(
						(error, result) => {
							result ? resolve(result) : reject(error);
						}
					);
					streamifier.createReadStream(req.file.buffer).pipe(stream);
				});
			};
			const result = await streamUpload(req);
			res.json({ status: 200, result });
		} catch (err) {
			res.json({ status: 500, message: err.toString() });
		}
	} else {
		res.json({
			status: 401,
			message: 'Unauthorized access',
		});
	}
}

//---- CREATE PRODUCT  ----//
async function createProduct(req, res) {
	{
		const { name, brand, slug, price, image, description, category } =
			req.body;
		const data = {
			name: 'sample-name' + Math.random(),
			brand: 'sample-brand',
			price: 'sample-price',
			category: 'sample-category',
			slug: 'sample-slug',
			image: 'sample-image',
			description: 'sample-description',
			rating: 0,
			numRevier: 0,
			countInStock: 0,
		};

		if (req.user.extra) {
			try {
				await db.connect();

				const product = await Product.create(data);
				await db.disconnect();
				console.log('product', product);
				res.json({ status: 201, data: product });
			} catch (err) {
				res.json({
					status: 500,
					message: err,
				});
			}
		} else {
			res.json({
				status: 401,
				message: 'Unauthorized access',
			});
		}
	}
}

//---- DELETE PRODUCT  ----//
async function deleteProduct(req, res) {
	const { productId } = req.params;
	console.log('delete product Id', productId);
	if (req.user.extra) {
		try {
			await db.connect();
			const product = await Product.findOneAndDelete({ _id: productId });
			await db.disconnect();
			console.log('delete response', product);
			res.json({ status: 200, message: ' Product deleted successfully' });
		} catch (err) {
			await db.disconnect();
			res.json({
				status: 500,
				message: err.toString(),
			});
		}
	} else {
		res.json({
			status: 401,
			message: 'Unauthorized access',
		});
	}
}
//---- GET ALL USERs  ----/ /
async function getUsers(req, res) {
	if (req.user.extra) {
		try {
			await db.connect();
			const users = await User.find().exec();
			await db.disconnect();
			res.json({ status: 200, users: users });
		} catch (err) {
			await db.disconnect();

			res.json({
				status: 200,
				message: err,
			});
		}
	} else {
		res.json({
			status: 401,
			message: 'Unauthorized access',
		});
	}
}

//---- DELETE USER  ----//
async function deleteUser(req, res) {
	const { userId } = req.params;
	console.log('userId', userId);
	if (req.user.extra) {
		try {
			await db.connect();
			const user = await User.findOneAndeDelete({ _id: userId });
			await db.disconnect();
			console.log('user', user);
			res.json({ status: 200, message: 'Delete Single Products' });
		} catch (err) {
			res.json({
				status: 500,
				message: err,
			});
		}
	} else {
		res.json({
			status: 401,
			message: 'Unauthorized access',
		});
	}
}

//----UPDATE SINGLE USER  ----//
async function updateUser(req, res) {
	let data = {};
	const { userId } = req.params;
	if (req.body.password) {
		data.password = bcrypt.hashSync(req.body.password);
	}
	if (req.body.name) {
		data.name = req.body.name;
	}
	if (req.body.email) {
		data.email = req.body.email;
	}
	if (req.body.isAdmin) {
		data.isAdmin = req.body.isAdmin;
	}
	if (req.user.extra) {
		try {
			await db.connect();
			const user = await User.findOneAndUpdate({ _id: userId }, data, {
				new: true,
			});
			await db.disconnect();
			if (user) {
				return res.json({
					status: 200,
					user: {
						email: user.email,
						name: user.name,
						isAdmin: user.isAdmin,
					},
				});
			} else {
				res.json({ status: 404, message: 'user not found' });
			}
		} catch (err) {
			res.json({
				status: 500,
				message: err.toString(),
			});
		}
	} else {
		res.json({
			status: 401,
			message: 'Unauthorized access',
		});
	}
}
router.route('/upload').post(verifyUser, upload.single('file'), uploadFile);
router.route('/summary').get(verifyUser, getSummary);
router.route('/users').get(verifyUser, getUsers);
router
	.route('/users/:userId')
	.delete(verifyUser, deleteUser)
	.put(verifyUser, updateUser);
router.route('/orders').get(verifyUser, getOrders);
router
	.route('/products/:productId')
	.get(verifyUser, getProduct)
	.put(verifyUser, updateProduct)
	.delete(verifyUser, deleteProduct);
router
	.route('/products')
	.get(verifyUser, getProducts)
	.post(verifyUser, createProduct);
router.route('/orders/delivery/:orderId').put(verifyUser, updateOrderStatus);
// router.route('/:orderId').get(getOne).put(updateOne).delete(deleteOne);

module.exports = router;
