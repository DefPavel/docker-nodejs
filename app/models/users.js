const { hostels } = require("../database/connection");
module.exports = class User {
    static async getUsers() {
        try { return await hostels("test").select("name"); } 
        catch (error) {
            console.log(error);
        }
    }
};
