
const config_database = require('../knexfile.js')['hostels']
const hostels = require('knex')(config_database)

module.exports = {
    hostels
}
