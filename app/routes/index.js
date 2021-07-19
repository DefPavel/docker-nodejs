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
    // Парсим значение из body имеющее name="qrcode"
    const qrcode_text = req.body.qrcode;
    
    if(qrcode_text.length === 0) res.send("Данные пустые");
    
    qr.toDataURL(qrcode_text,(err,src) =>{
    
    if(err) res.send("Ошибка генерации qrcode");
    //res.render("scan", {srs} );
    res.images
    });

});



module.exports = router;