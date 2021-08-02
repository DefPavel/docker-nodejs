const moment = require("moment");
moment.locale("ru");
const person = require("../models/person.js");
const hostel = require("../models/hostel.js");

exports.getViewTablePerson = async function (req, res) {

  res.render("pages/person-hostel", {
      title: "Общежитие",
      title_h: await hostel.getHostelById(req.params["id_hostel"]),
      name_link: "/hostel/" + req.params["id_hostel"],
      to_day: moment().format('LL'),
      person_items: await person.getPersonToHostel(req.params["id_hostel"])
  });
    
};