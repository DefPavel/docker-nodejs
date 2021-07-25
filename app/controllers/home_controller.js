const qr = require("qrcode");
const users = require("../models/users.js");

// Вернуть View
exports.getHomeView = function (req, res) {
    res.render("pages/home", { title: "Главная", name_link: "/home" });
};
// Генерация QRCode
exports.generateQR = function (req, res) {
    qr.toDataURL(req.body.text_box, (err, src) => {
        if (err) res.send("Ошибка генерации");
        res.send(src);
    });
};

exports.getUsers = async function (req, res) {

    res.render("pages/test", {
        users: await users.getUsers(),
    });
    console.log(users.getUsers());
    
};
