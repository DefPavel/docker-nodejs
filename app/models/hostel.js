const { hostels } = require("../database/connection");

module.exports = class Hostel {
  
    

    // Вернуть только список зданий
    static async getHostels() {
        try { return await hostels("hostel").select("id","name"); } 
        catch (error) {
            console.log(error);
        }
    }

     // Вернуть здание по Id
     static async getHostelById(id_hostel) {
        try { return await hostels("hostel").select("id","name").where("id", id_hostel).first(); } 
        catch (error) {
            console.log(error);
        }
    }
    // Вернуть только список зданий
    static async getSection(id_hostel) {
        try { return await hostels("section").select("id","name").where("id_hostel", id_hostel); } 
        catch (error) {
            console.log(error);
        }
    }

    // Вернуть только список зданий
    static async getRoom(id_section) {
        try { return await hostels("room").select("id","name").where("id_section", id_section); } 
        catch (error) {
            console.log(error);
        }
    }

    // Получить полностью все общежития
    static async getAllHostels() {
        try {  
            return await 
            hostels("department")
            .join("hostel", {"department.id": "hostel.id_department"} )
            .join("section", {"hostel.id": "section.id_hostel"} )
            .join("room", {"section.id": "room.id_section"} )
            .select(
                {hostel: "hostel.name" },
                {section: "section.name" },
                {room: "room.name" }
            );
        } 
        catch (error) {
            console.log(error);
        }
    }

    // Создать новую комнату
    static async AddItemTree() {
        await pers
            .transaction(function (trx) {
                pers("room")
                    .transacting(trx)
                    .insert({
                        name: req.body.name_room,
                    })
                    .onConflict("name") // В случае конфликта заменяет данные
                    .merge()
                    .then(trx.commit)
                    .catch(trx.rollback);
            })
            .then(function (resp) {
                res.status(200).send(resp);
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
    };
    


    // Удалить общежитие
    static async deleteHostel() {
        return await 
            hostels.transaction(function (trx) {
                hostels("hostel")
                    .transacting(trx)
                    .where({ id: req.params["id_host"] })
                    .del()
                    .then(trx.commit)
                    .catch(trx.rollback);
            })
            .then(function (resp) {
                res.status(200).send(resp);})
            .catch(function (err) {
                res.status(500).send(err);});
    }
   
};
