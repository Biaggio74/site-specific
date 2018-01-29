const express = require('express');
const app = express();


const PORT = 3000;

app.get('/', (req, res, next) => {
  res.status(200).send('App is up and running ;)');
})


app.listen(PORT, () => {
  console.log('Server listens on port ' + PORT);
})
