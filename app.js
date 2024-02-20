var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose'); 

// Require the blogs.js model file
const Blog = require('./models/blogs');

// Import the blog controller
var blogRouter = require('./Controllers/blog'); // Ensure correct file path and name
const indexRouter = require('./routes/index'); 

var app = express();

// Configure middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define routes
app.use('/', indexRouter); 
app.use('/blog', blogRouter);

// Render Add Blog page
app.get('/blog-add', function(req, res, next) {
  res.render('blog-add', { title: 'Add Blog' });
});

// Render List Blogs page
app.get('/blog-list', function(req, res, next) {
  res.render('blog-list', { title: 'List Blogs' });
});

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

// Start the server
const port = process.env.PORT || 3000; // Use port 3000 by default if PORT environment variable is not set
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
