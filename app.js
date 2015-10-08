var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

var db;

if(process.env.ENV == 'Test')
    db = mongoose.connect('mongodb://localhost/bookApi_Test');
else {
    db = mongoose.connect('mongodb://localhost/bookApi');
}

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
//app.use('/api/author', authorRouter);


app.get('/', function(req, res) {
	res.send('Welcome to My API');
});

app.listen(port, function(){
	console.log('Gulp is running the app on Port: ' + port);
});

module.exports = app;