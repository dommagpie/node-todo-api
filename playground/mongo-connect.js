const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to Mongo server');
	}
	console.log('Connected to Mongo server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo: ', err);
	// 	}
	// 	console.log(JSON.stringify(result, undefined, 2));
	// });

	db.collection('Users').insertOne({
		name: 'Dom Danao',
		age: 48,
		location: 'Makati'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert todo: ', err);
		}
		console.log(JSON.stringify(result, undefined, 2));
	});

	db.close();
});