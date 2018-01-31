const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
//logging middleware
const morgan = require('morgan');
const favicon = require('serve-favicon');

const staticRouter = require('./server/routes/static.js');

//npm packages
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(helmet());

app.set('views', path.join(__dirname, 'client/views/pages'));
app.set('view engine', 'ejs');

app.use('/', staticRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server listens on port ' + PORT);
})


//catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
app.use((err, req, res, next) => {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
