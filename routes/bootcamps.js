const express = require('express');
const {
  getBootCamps,
  getBootCamp,
  createBootCamp,
  updateBootcamp,
  deleteBootCamp
} = require('../controllers/bootcamps');
const router = express.Router();

router
  .route('/')
  .get(getBootCamps)
  .post(createBootCamp);

router
  .route('/:id')
  .get(getBootCamp)
  .put(updateBootcamp)
  .delete(deleteBootCamp);

module.exports = router;
