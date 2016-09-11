var express=require('express');
var bodyParser = require('body-parser');
var dateConverter=require('./modules/date-converter');


var app = express();

// Path to our public directory

var pub = __dirname;
app.use(express.static(pub));

// Optional since express defaults to CWD/views

app.set('views', __dirname);

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');


app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function(req,res){
  
    res.render('index');

});


app.get('/:date', function(req,res){
    var date = req.params.date;
    //check if its unix date
    
    //check if its natural date with December 15, 2015 format
    
    //if not return null  {unix : null , natural : null }
    res.send(dateConverter.buildJSONDate(date));
});

app.listen(3000,function(){
  console.log("Listening on 3000"); 
});