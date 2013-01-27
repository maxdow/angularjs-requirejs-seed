var express = require('express'),
	app = express();


app.configure(function(){
  /*app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());*/
  app.use(express.static(__dirname + '/public'));
  //app.use(app.router);
});


app.listen(3000);
console.log('Listening on port 3000');