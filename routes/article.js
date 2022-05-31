const express = require('express');
const {
  index,
  postArticle,
  detailArticle,
  getData,
} = require('../controllers/articleController.js');
const router = express.Router();

router.get('/articles', index);

//===>> API
router.get('/articles/create', getData);
router.post('/articles', postArticle);
router.get('/articles/:id', detailArticle);

module.exports = router;
