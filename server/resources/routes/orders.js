const db = require('../../utils/db');
const verifyUser = require('../../utils/verifyUser');
const Order = require('../models/order');
const router = require('express').Router();

//---- GET ALL ORDERS  ----//
async function getAll(req, res) {
	try {
		await db.connect();
		const orders = await Order.find().exec();
		console.log(orders, 'orders');
		await db.disconnect();
		res.json({ status: 200, orders: orders });
	} catch (err) {
		await db.disconnect();
		res.json({
			status: 500,
			message: err,
		});
	}
}
//---- CREATE PRODUCT  ----//
async function createOne(req, res) {
	const {
		shippingAddress,
		paymentMethod,
		orderItems,
		totalAmount,
		itemsAmount,
		taxAmount,
	} = req.body;
	const { id } = req.user;
	const data = {};
	if (shippingAddress) {
		data.shippingAddress = shippingAddress;
	}
	if (orderItems) {
		data.orderItems = orderItems;
	}
	if (paymentMethod) {
		data.paymentMethod = paymentMethod;
	}
	if (totalAmount) {
		data.totalAmount = totalAmount;
	}
	if (taxAmount) {
		data.taxAmount = taxAmount;
	}
	if (itemsAmount) {
		data.itemsAmount = itemsAmount;
	}
	if (id) {
		data.user = id;
	}
	console.log('data', data);
	try {
		await db.connect();

		const order = await Order.create(data);
		await db.disconnect();
		res.json({ status: 201, order });
	} catch (err) {
		await db.disconnect();

		res.json({
			status: 500,
			message: err,
		});
	}
}
//---- GET SINGLE PRODUCT  ----//
async function getOne(req, res) {
	console.log('query', req.query);
	console.log('param', req.params);
	const { orderId } = req.params;

	try {
		await db.connect();
		const order = await Order.findOne({ _id: orderId }).exec();
		await db.disconnect();
		console.log('order', order);
		if (!order) {
			return res.json({ status: 404, message: 'No order Found' });
		}
		res.json({ status: 200, order: order });
	} catch (err) {
		await db.disconnect();

		return res.json({ status: 500, message: 'No order Found' });
	}
}

//----UPDATE PAYMENT STATUS  ----//
async function updateOne(req, res) {
	const { id } = req.params;
	console.log('id', id);

	try {
		await db.connect();
		const order = await Order.findOneAndUpdate(
			{ _id: id },
			{},
			{ new: true }
		);
		await db.disconnect();
		console.log('order', order);
		res.json({ status: 200, message: 'Update Order' });
	} catch (err) {
		await db.disconnect();

		res.json({
			status: 500,
			message: err,
		});
	}
}

//----  UPDATE  PAYMENT STATUS  ----//
async function updatePaymentStatus(req, res) {
	console.log(req);
	console.log('++++++++++++');
	const { orderId } = req.params;
	console.log('id', orderId);
	console.log(req.query);
	try {
		await db.connect();
		const order = await Order.findById(orderId);
		console.log('Pay order', order);
		if (order) {
			(order.isPaid = true), (order.paidAt = Date.now());
			order.paymentResult = {
				status: req.body.status,
				emailAddress: req.body.email_address,
				id: req.body.id,
			};
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
			message: err,
		});
	}
}

//---- DELETE PRODUCT  ----//
async function deleteOne(req, res) {
	const { id } = req.params;
	console.log('id', id);
	try {
		await db.connect();
		const order = await Order.findOneAndeDelete({ _id: id });
		await db.disconnect();
		console.log('order', order);
		res.json({ status: 200, message: 'Delete Single Order' });
	} catch (err) {
		await db.disconnect();

		res.json({
			status: 500,
			message: err,
		});
	}
}

router.route('/').get(getAll).post(verifyUser, createOne);
router.route('/pay/:orderId').put(verifyUser, updatePaymentStatus);
router.route('/:orderId').get(getOne).delete(deleteOne);

module.exports = router;
