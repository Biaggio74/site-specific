const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
//logging middleware
const morgan = require('morgan');
const favicon = require('serve-favicon');

const staticRouter = require('./server/routes/static.js');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'client/views/pages'));
app.set('view engine', 'ejs');

app.use('/', staticRouter);

const PORT = process.env.PORT || 3000;

app.use(helmet());


app.listen(PORT, () => {
  console.log('Server listens on port ' + PORT);
})
