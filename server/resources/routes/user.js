const router = require('express').Router();
const User = require('../models/user');
const db = require('../../utils/db');
const bcrypt = require('bcryptjs');
const generateToken = require('../../utils/jwtTokenGenerator');
const verifyUser = require('../../utils/verifyUser');

//---- GET ALL USERs  ----//
async function getAll(req, res) {
	try {
		await db.connect();
		const users = await User.find().exec();
		await db.disconnect();
		res.json({ status: 200, users: users });
	} catch (err) {
		res.json({
			status: 200,
			message: err,
		});
	}
}

//---- CREATE USER  ----//
async function createOne(req, res) {
	const { name, email, password } = req.body;
	const data = {};

	if (name) {
		data.name = name;
	}
	if (email) {
		data.email = email;
	}
	if (password) {
		data.password = bcrypt.hashSync(password);
	}

	try {
		await db.connect();
		const alreadyExists = await User.findOne({ email: email });
		console.log('alreadyExist', alreadyExists);
		if (alreadyExists)
			return res.json({
				status: 401,
				message: `${data.email} already registered, Please Login `,
			});
		const user = await User.create(data);
		await db.disconnect();
		console.log('user', user);
		res.json({ status: 201, user });
	} catch (err) {
		res.json({
			status: 500,
			message: err,
		});
	}
}

//---- GET SINGLE USER  ----//
async function getOne(req, res) {
	console.log('id', req.query);
	console.log('id', req.params);
	const { slug } = req.params;
	try {
		await db.connect();
		const user = await User.findOne({ slug: slug }).exec();
		await db.disconnect();
		console.log('user', user);
		if (!user) {
			return res.json({ status: 404, message: 'No user Found' });
		}
		res.json({ status: 200, user: user });
	} catch (err) {
		res.json({
			status: 500,
			message: err,
		});
	}
}

//----UPDATE SINGLE USER  ----//
async function updateOne(req, res) {
	let data = {};
	if (req.body.password) {
		data.password = bcrypt.hashSync(req.body.password);
	}
	if (req.body.name) {
		data.name = req.body.name;
	}
	if (req.body.email) {
		data.email = req.body.email;
	}
	try {
		await db.connect();
		const user = await User.findOneAndUpdate({ _id: req.user.id }, data, {
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
}

//---- DELETE USER  ----//
async function deleteOne(req, res) {
	const { id } = req.params;
	console.log('id', id);
	try {
		await db.connect();
		const user = await User.findOneAndeDelete({ _id: id });
		await db.disconnect();
		console.log('user', user);
		res.json({ status: 200, message: 'Delete Single Products' });
	} catch (err) {
		res.json({
			status: 500,
			message: err,
		});
	}
}

// ---- USER SIGNIN HANDLER --- //
async function signIn(req, res) {
	const { password, email } = req.body;

	try {
		await db.connect();
		const user = await User.findOne(
			{ email: email },
			{ createdAt: 0, updatedAt: 0, _v: 0 }
		).lean();
		await db.disconnect();

		if (!user) {
			return res.json({ status: 404, message: 'No user found' });
		}
		const validPassword = bcrypt.compareSync(password, user.password);
		if (!validPassword) {
			return res.json({
				status: 401,
				message: 'Invalid email or password',
			});
		}
		const token = await generateToken(user);

		if (token) {
			return res.json({
				status: 200,
				user: {
					email: user.email,
					name: user.name,
					id: user._id,
					isAdmin: user.isAdmin,
					token,
				},
			});
		}
	} catch (err) {
		res.json({
			status: 500,
			message: err,
		});
	}
}
router.route('/auth/login').post(signIn);
router.route('/register').post(createOne);
router.route('/profile').put(verifyUser, updateOne);
router.route('/').get(getAll);
router.route('/:id').get(getOne).delete(deleteOne);

module.exports = router;
