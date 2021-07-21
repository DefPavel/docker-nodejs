
const qr = require('qrcode');

// Вернуть View
exports.getHomeView = async function (req, res){
    await res.render('pages/home', { title: 'Главная' });
};
// Генерация QRCode
exports.generateQR =  function(req, res) {
    qr.toDataURL(req.body.text_box, (err, src) => {
        if (err)
            res.send('Ошибка генерации');
        res.send(src);
    });
  };