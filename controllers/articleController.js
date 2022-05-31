const { Article } = require('../models');

const index = (req, res) => {
  Article.findAll().then((articles) => {
    res.render('articles/index', {
      articles,
    });
  });
};

const getData = (req, res) => {
  res.render('articles/create');
};
const postArticle = (req, res) => {
  Article.create({
    title: req.body.title,
    body: req.body.body,
  }).then((article) => {
    res.redirect('/articles');
  });
};

const detailArticle = (req, res) => {
  Article.findOne({
    where: { id: req.params.id },
  }).then((article) => {
    // Karena hasil dari promise findOne adalah object,
    // Maka bisa kita lempar langsung ke method render
    res.render('articles/show', article.dataValues);
  });
};
module.exports = { index, postArticle, detailArticle, getData };
