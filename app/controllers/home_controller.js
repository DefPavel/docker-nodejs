const qr = require("qrcode");
const moment = require("moment");
moment.locale("ru");
const hostel = require("../models/hostel.js");
const person = require("../models/person.js");

// Вернуть View
exports.getHomeView = async function (req, res) {
    res.render("pages/home", 
    { 
        title: "Главная",
        name_link: "/home",
        to_day: moment().format('LL'),
        count_person: await person.getCountPerson(),

        // Количество заблокированных
        count_blocked_host_2: await person.getCount_Blocked_Person(1),
        count_blocked_host_3: await person.getCount_Blocked_Person(2),
        count_blocked_host_4: await person.getCount_Blocked_Person(3),
        count_blocked_host_5: await person.getCount_Blocked_Person(4),
        count_blocked_host_7: await person.getCount_Blocked_Person(5),

        // Количество зашедших 
        count_pers_t_host_2: await person.getCount_True_Hostel(1),
        count_pers_t_host_3: await person.getCount_True_Hostel(2),
        count_pers_t_host_4: await person.getCount_True_Hostel(3),
        count_pers_t_host_5: await person.getCount_True_Hostel(4),
        count_pers_t_host_7: await person.getCount_True_Hostel(5),

         // Количество вышедших 
         count_pers_f_host_2: await person.getCount_False_Hostel(1),
         count_pers_f_host_3: await person.getCount_False_Hostel(2),
         count_pers_f_host_4: await person.getCount_False_Hostel(3),
         count_pers_f_host_5: await person.getCount_False_Hostel(4),
         count_pers_f_host_7: await person.getCount_False_Hostel(5),


    });

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
