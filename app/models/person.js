const { hostels } = require("../database/connection");

module.exports = class Person {

     // Количество заселенных
     static async getCountPerson() {
        try { return await 
            hostels("person")
            .join("person_card", {"person.id": "person_card.id_person"} )
            .count({ count_person: "person.id" })
        } 
        catch (error) {
            console.log(error);
        }
    }
}