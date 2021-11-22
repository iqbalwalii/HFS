const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			require: true,
		},
		orderItems: [
			{
				name: { type: String, require: true },
				quantity: { type: Number, require: true },
				image: { type: String, require: true },
				price: { type: Number, require: true },
			},
		],
		shippingAddress: {
			address: { type: String, required: true },
			city: { type: String, required: true },
			postalCode: { type: String, required: true },
			country: { type: String, required: true },
		},
		paymentResult: {
			id: { type: String },
			status: { type: String },
			email_address: { type: String },
		},
		paymentMethod: { type: String, required: true },
		totalAmount: { type: Number, require: true },
		taxAmount: { type: Number, require: true },
		itemsAmount: { type: Number, require: true },
		isPaid: { type: Boolean, default: false },
		paidAt: { type: Date },
		isDelivered: { type: Boolean, default: false },
		deliveredAt: { type: Date },
	},
	{ timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

module.exports = Order;
