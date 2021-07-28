const { hostels } = require("../database/connection");

module.exports = class Person {

     // Количество заселенных
     static async getCountPerson() {
        try { return await 
            hostels("persons")
            .join("person_card", {"persons.id": "person_card.id_person"} )
            .count({ pers: "persons.id" })
        } 
        catch (error) {
            console.log(error);
        }
    }

    // Количество заселенных
    static async getCount_Blocked_Person(id_hostel) {
        try { return await 
            hostels("hostel")
            .join("section", {"hostel.id": "section.id_hostel"} )
            .join("room", {"section.id": "room.id_section"} )
            .join("person_card", {"room.id": "person_card.id_room"})
            .count({ count_person: "person_card.id" })
            .where("person_card.status_card", "B") // имеют статус "заблокирован"
            .where("hostel.id", id_hostel);
        } 
        catch (error) {
            console.log(error);
        }
    }

    // получить список людей из общежитий
    static async getPersonToHostel(hostel_id) {
        try {  
            return await 
            hostels("hostel")
            .join("section", {"hostel.id": "section.id_hostel"} )
            .join("room", {"section.id": "room.id_section"} )
            .join("person_card", {"room.id": "person_card.id_room"})
            .join("person_move", {"person_card.id": "person_move.id_card"})
            .join("persons", {"person_card.id_person": "persons.id"})
            .select(
                {hostel: "hostel.name" },
                {section: "section.name" },
                {room: "room.name" },
                {first_name: "persons.firstName"},
                {middle_name: "persons.middleName"},
                {last_name: "persons.lastName"},
                {birthday: "persons.birthday"},
                {photo: "persons.photo_url"},
                {status_person: "persons.status_person"},
                {date_settling: "persons.date_settling"}, //Дата заселения
                {date_eviction: "persons.date_eviction"}, // Дата выселения
                {code: "person_card.code"}, // Номер пропуска 
                {status: "person_card.status_card"}, // Статус персон
                {id_cont : "persons.id_cont"}

            ).where("hostel.id", hostel_id);
        } 
        catch (error) {
            console.log(error);
        }
    }

    // получить список людей из общежитий
    static async getPersonToSection(section_id) {
        try {  
            return await 
            hostels("hostel")
            .join("section", {"hostel.id": "section.id_hostel"} )
            .join("room", {"section.id": "room.id_section"} )
            .join("person_card", {"room.id": "person_card.id_room"})
            .join("person_move", {"person_card.id": "person_move.id_card"})
            .join("persons", {"person_card.id_person": "persons.id"})
            .select(
                {hostel: "hostel.name" },
                {section: "section.name" },
                {room: "room.name" },
                {first_name: "persons.firstName"},
                {middle_name: "persons.middleName"},
                {last_name: "persons.lastName"},
                {birthday: "persons.birthday"},
                {photo: "persons.photo_url"},
                {status_person: "persons.status_person"},
                {date_settling: "persons.date_settling"}, //Дата заселения
                {date_eviction: "persons.date_eviction"}, // Дата выселения
                {code: "person_card.code"}, // Номер пропуска 
                {status: "person_card.status_card"}, // Статус персон
                {id_cont : "persons.id_cont"}

            ).where("section.id", section_id);
        } 
        catch (error) {
            console.log(error);
        }
    }

    // получить список людей из общежитий
    static async getPersonToRoom(room_id) {
        try {  
            return await 
            hostels("hostel")
            .join("section", {"hostel.id": "section.id_hostel"} )
            .join("room", {"section.id": "room.id_section"} )
            .join("person_card", {"room.id": "person_card.id_room"})
            .join("person_move", {"person_card.id": "person_move.id_card"})
            .join("persons", {"person_card.id_person": "persons.id"})
            .select(
                {hostel: "hostel.name" },
                {section: "section.name" },
                {room: "room.name" },
                {first_name: "persons.firstName"},
                {middle_name: "persons.middleName"},
                {last_name: "persons.lastName"},
                {birthday: "persons.birthday"},
                {photo: "persons.photo_url"},
                {status_person: "persons.status_person"},
                {date_settling: "persons.date_settling"}, //Дата заселения
                {date_eviction: "persons.date_eviction"}, // Дата выселения
                {code: "person_card.code"}, // Номер пропуска 
                {status: "person_card.status_card"}, // Статус персон
                {id_cont : "persons.id_cont"}

            ).where("room.id", room_id);
        } 
        catch (error) {
            console.log(error);
        }
    }

}