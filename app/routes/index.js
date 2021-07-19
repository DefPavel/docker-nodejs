const { Router } = require('express');
const router = Router();

// Роутинг на авторизацию
router.get('/', function(req, res) {
    res.render('pages/login', { title: 'Авторизация' });
  });
// Роутинг на главную страницу
  router.get('/home', function(req, res) {
    res.render('pages/home', { title: 'Главная страница' });
  });


module.exports = router;