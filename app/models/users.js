const { hostels } = require("../database/connection");
module.exports = class User {

    static getUsers() {
        try { hostels('test').select("name")
              .then(function (records) {
                  console.log(records);
                return records;
             });
        } catch (error) {
            console.log(error);
        }
    }
}