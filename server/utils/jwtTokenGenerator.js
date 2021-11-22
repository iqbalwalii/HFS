const jwt = require('jsonwebtoken');

async function jwtTokenGenerator(payload) {
	const token = await jwt.sign(
		{
			email: payload.email,
			name: payload.name,
			id: payload._id,
			extra: payload.isAdmin,
		},
		process.env.JWT_SECRET,
		{ expiresIn: '14d' }
	);
	return token;
}

module.exports = jwtTokenGenerator;
