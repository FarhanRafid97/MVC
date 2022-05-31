const express = require('express');
const router = require('./routes/article');

const PORT = 3222;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(router);
// GET /articles/create, menampilkan form create

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
