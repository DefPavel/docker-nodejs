const { Router } = require('express');
const router = Router();
const qr = require('qrcode');

// Роутинг на авторизацию
router.get('/', function(req, res) {
    res.render('pages/login', { title: 'Авторизация' });
  });
// Роутинг на главную страницу
  router.get('/home', function(req, res) {
    res.render('pages/home', { title: 'QR scanner' });
  });

// Роутинг на qrcode
router.post('/scan', function(req, res) {
  qr.toDataURL(req.body.qrcode, (err, src) =>{
    if(err) console.log('Ошибка генерации')
      res.send(src);  
  });
});


module.exports = router;