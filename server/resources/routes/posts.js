const Post = require('../models/blog');
const router = require('express').Router();
const verifyUser = require('../../utils/verifyUser');
//---- GET ALL POSTs  ----//
async function getAll(req, res) {
	try {
		await db.connect();
		const posts = await Post.find().exec();
		await db.disconnect();
		res.json({ status: 200, posts });
	} catch (err) {
		await db.disconnect();
		res.json({
			status: 200,
			message: err,
		});
	}
}
//---- CREATE POST  ----//
async function createOne(req, res) {
	const { title, image, description } = req.body;
	const data = {};
	if (req.user.extra) {
		if (title) {
			data.title = title;
			data.slug = title.toLowerCase().split(' ').join('-');
		}
		if (description) {
			data.description = description;
		}

		data.user = req.user.id;

		try {
			await db.connect();
			const alreadyExists = await Post.findOne({ slug: data.slug });
			console.log('Post alreadyExist', alreadyExists);
			if (alreadyExists) {
				await db.disconnect();
				return res.json({
					json: 200,
					message: `Blog post with [ ${title} ]already exits. `,
				});
			}
			const post = await Post.create(data);
			await db.disconnect();
			console.log('post', post);
			res.json({ status: 201, post });
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
//---- GET SINGLE POST  ----//
async function getOne(req, res) {
	console.log('id', req.query);
	console.log('id', req.params);
	const { slug } = req.params;
	try {
		await db.connect();
		const post = await Post.findOne({ slug: slug }).exec();
		await db.disconnect();
		console.log('post', post);
		if (!post) {
			return res.json({ status: 404, message: 'No post found' });
		}
		res.json({ status: 200, post });
	} catch (err) {
		await db.disconnect();
		res.json({
			status: 500,
			message: err.toString(),
		});
	}
}
//---- DELETE SINGLE POST  ----//
async function deleteOne(req, res) {
	console.log('id', req.query);
	console.log('id', req.params);
	const { slug } = req.params;
	if (req.user.extra) {
		try {
			await db.connect();
			const post = await Post.findOneAndDelete({ _id: slug }).exec();
			await db.disconnect();
			console.log('post', post);
			if (!post) {
				return res.json({ status: 404, message: 'No post found' });
			}
			res.json({ status: 200, post });
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

//----UPDATE SINGLE POST  ----//
async function updateOne(req, res) {
	const { slug } = req.params;
	console.log('id', slug);
	if (req.user.extra) {
		try {
			await db.connect();
			const post = await Post.findOneAndUpdate(
				{ _id: slug },
				{ ...req.body },
				{ new: true }
			);
			await db.disconnect();
			console.log('post', post);
			res.json({ status: 200, message: 'Update Successfull' });
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

router.route('/').get(getAll).post(verifyUser, createOne);
router
	.route('/:slug')
	.get(getOne)
	.put(verifyUser, updateOne)
	.delete(verifyUser, deleteOne);

module.exports = router;
