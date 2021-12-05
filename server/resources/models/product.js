const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
	{
		name: { type: String, require: true },
		brand: { type: String, require: true },
		slug: { type: String, require: true, unique: true },
		description: { type: String, require: true },
		category: { type: String, require: true },
		price: { type: Number, require: true },
		bannerImage: { type: String, require: true },
		images: [{ type: String, require: true }],
		rating: { type: Number },
		isActive: { type: Number, enum: [0, 1], default: 1 },
		numReviews: { type: Number },
		isAvailable: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

const Product =
	mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;
