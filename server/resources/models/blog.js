const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		require: true,
	},
	slug: { type: String, require: true, unique: true },

	title: {
		type: String,
		trim: true,
		required: true,
	},
	images: [
		{
			type: String,
			trim: true,
		},
	],
	description: [
		{
			type: String,
			trim: true,
		},
	],
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

module.exports = Post;
