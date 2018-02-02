const express = require('express');
const geoTiffRouter = express.Router();

const geo = {
  width: 25,
  height: 59
};


geoTiffRouter.get('/render-sample', (req, res, next) => {
  res.status(200).send({geotiff: geo});
})



module.exports = geoTiffRouter;
