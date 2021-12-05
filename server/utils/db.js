require('dotenv').config();
var mongoose = require('mongoose');

const connection = {};

// connection to db
async function connect() {
	if (connection.isConnected) {
		console.log('Already connected to DB');
		return;
	}
	if (mongoose.connections.length > 0) {
		connection.isConnected = mongoose.connections[0].readyState;
		if (connection.isConnected === 1) {
			console.log('use previous connection of DB');
			return;
		}
		await mongoose.disconnect();
	}
	const db = await mongoose.connect(
		'mongodb+srv://irfan:HFSSCOM@main.7wcgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);
	console.log('New DB connection established');
	connection.isConnected = db.connections[0].readyState;
}

// connection from db
async function disconnect() {
	if (connection.isConnected) {
		if (process.env.NODE_ENV === 'production') {
			await mongoose.disconnect();
			connection.isConnected = false;
		} else {
			console.log('not disconneting');
		}
	}
}
const db = { connect, disconnect };

module.exports = db;
