var express = require('express');

var app= express();

app.use(express.static(__dirname + '/public'));

//setup handlebars view engine
var handlebars = require('express-handlebars')
	.create({defaultLayout: 'main'});
	app.engine('handlebars', handlebars.engine);
	app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about')
});


//404 catch all handler (middleware)
app.use(function(req,res){
	res.status(404);
	res.render('404');
});

// custom 500 page
app.use(function(req,res){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' + app.get('port') + 'press ctrl C to exit');

});