const { hostels } = require("../database/connection");

module.exports = class Hostel {
    
    static async getHostels() {
        try { return await hostels("hostel").select("name"); } 
        catch (error) {
            console.log(error);
        }
    }
};
