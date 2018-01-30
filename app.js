const express = require('express');
const app = express();
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;

app.use(helmet());

app.get('/', (req, res, next) => {
  console.log('GET request OK....')
  res.status(200).send({name: 'appStart'});
})


app.listen(PORT, () => {
  console.log('Server listens on port ' + PORT);
})
