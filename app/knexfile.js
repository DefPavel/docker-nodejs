require('dotenv').config();

const hostels = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    migrations: {
        directory: __dirname + '/migrations/hostel',
        tableName: 'migrations',
    },
}

module.exports = {
    hostels
}
