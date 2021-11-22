const jwt = require('jsonwebtoken');

function verifyUser(req, res, next) {
	console.log('TOKEN', req.headers.authorization);
	console.log('TOKEN', req.headers.authorization);
	try {
		const payload = req.headers.authorization.slice(7);
		jwt.verify(payload, process.env.JWT_SECRET, (err, user) => {
			console.log('err', err);
			console.log('user', user);
			if (err) {
				res.json({ status: 401, message: 'Please login.' });
			} else {
				req.user = user;
				next();
			}
		});
	} catch (error) {
		res.json({ status: 401, message: 'Please login.' });
	}
}

module.exports = verifyUser;
