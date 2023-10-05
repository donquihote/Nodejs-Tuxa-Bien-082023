var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var themeRouter = require('./routes/theme')

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://phibien:Phido2015@cluster0.ebkhwc8.mongodb.net/?retryWrites=true&w=majority')
var db = mongoose.connection;
db.on('error', () => {
  console.log('connection eroor123');
});
db.once('open', function(){
  console.log('connected');
});

var Testschema= mongoose.Schema({
  name: String,
  title: String
});





var Test = mongoose.model('Test', Testschema );
/* var item1 = new Item({
  name: 'Django',
  status:"inactive",
  ordering: 10, 
 });
 item1.save()
 .then(function(item1){
   console.log(item1);
 })
 .catch(function (err) {
   console.log(err);
 }); */
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set('layout', 'backend');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/theme', themeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
