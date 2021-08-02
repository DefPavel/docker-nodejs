const dateFormat = require("dateformat");
dateFormat.i18n = {
    dayNames: [
      "Вс.",
      "Пн.",
      "Вт.",
      "Ср.",
      "Чт.",
      "Пт.",
      "Сб.",
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
    monthNames: [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
  };

  const person = require("../models/person.js");

  const hostel = require("../models/hostel.js");
  

  exports.getViewTablePerson = async function (req, res) {

    res.render("pages/person-hostel", {

        title: await hostel.getHostelById(req.params["id_hostel"]),
        name_link: "/hostel/" + req.params["id_hostel"],
        to_day: dateFormat(new Date(),"longDate", true),
        person_items: await person.getPersonToHostel(req.params["id_hostel"])
    });
    
};