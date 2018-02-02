const express = require('express');
const staticRouter = express.Router();


staticRouter.get('/', (req, res, next) => {
  console.log('GET request OK....')
  var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else. And one more linnneee";

    res.render('index', {
      title: 'Site specific assessment',
        drinks: drinks,
        tagline: tagline
    });
})

staticRouter.get('/about', (req, res, next) => {
  res.send(`This is page ABOUT`)
})


module.exports = staticRouter;
