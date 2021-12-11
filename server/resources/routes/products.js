const db = require('../../utils/db');
const Product = require('../models/product');
const router = require('express').Router();

//---- GET ALL PRODUCTs  ----//
async function getAll(req, res) {
	const { category } = req.query;
	const qry = category ? { category } : {};
	try {
		await db.connect();
		const products = await Product.find(qry).lean();
		await db.disconnect();
		res.json({ status: 200, products: products });
	} catch (err) {
		res.json({
			status: 200,
			message: err,
		});
	}
}
//---- CREATE PRODUCT  ----//
async function createOne(req, res) {
	const { name, brand, slug, price, image, description, masterCategory } =
		req.body;
	const data = {};

	if (name) {
		data.name = name;
	}
	if (brand) {
		data.brand = brand;
	}
	if (slug) {
		data.slug = slug;
	}
	if (masterCategory) {
		data.masterCategory = masterCategory;
	}
	if (price) {
		data.price = price;
	}
	if (image) {
		data.image = image;
	}
	if (description) {
		data.description = description;
	}

	try {
		await db.connect();
		const alreadyExists = await Product.findOne({
			$and: [{ name: name }, { brand: brand }],
		});
		console.log('alreadyExist', alreadyExists);
		if (alreadyExists)
			return res.json({
				json: 200,
				error: `${name} already exits with this ${brand} brand `,
			});
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
}
//---- GET SINGLE PRODUCT  ----//
async function getOne(req, res) {
	console.log('id', req.query);
	console.log('id', req.params);
	const { slug } = req.params;
	try {
		await db.connect();
		const product = await Product.findOne({ slug: slug }).exec();
		await db.disconnect();
		console.log('product', product);
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
}

//----UPDATE SINGLE PRODUCT  ----//
async function updateOne(req, res) {
	const { id } = req.params;
	console.log('id', id);

	try {
		await db.connect();
		const product = await Product.findOneAndUpdate(
			{ _id: id },
			{},
			{ new: true }
		);
		await db.disconnect();
		console.log('product', product);
		res.json({ status: 200, message: 'Update Products' });
	} catch (err) {
		res.json({
			status: 500,
			message: err.toString(),
		});
	}
}

router.route('/').get(getAll).post(createOne);
router.route('/:slug').get(getOne).put(updateOne);

module.exports = router;
