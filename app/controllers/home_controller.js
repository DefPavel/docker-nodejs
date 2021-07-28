const qr = require("qrcode");
const hostel = require("../models/hostel.js");
const person = require("../models/person.js");

// Вернуть View
exports.getHomeView = async function (req, res) {
    res.render("pages/home", 
    { 
        title: "Главная",
        name_link: "/home",
        count_person: await person.getCountPerson(),

    });
    
    console.log( await person.getCountPerson());
};

// Генерация QRCode
exports.generateQR = function (req, res) {
    qr.toDataURL(req.body.text_box, (err, src) => {
        if (err) res.send("Ошибка генерации");
        res.send(src);
    });
};

exports.getHostels = async function (req, res) {

    res.render("pages/test", {
        items_host: await hostel.getHostels(),
        items_section: await hostel.getSection(null),
        items_room: await hostel.getRoom(1),
    });
    
};
