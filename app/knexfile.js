require("dotenv").config();

/*const hostels = {
    client: process.env.DB_CLIENT,
    connection: {
        //host: process.env.DB_HOST,
        //user: process.env.DB_USER,
        //password: process.env.DB_PASSWORD,
        //database: process.env.DB_NAME,
        host: 'db-basic',
        user: 'root',
        password: 'kek',
        database: 'hostels'

    },
    migrations: {
        directory: __dirname + '/migrations/hostel',
        tableName: 'migrations',
    },
}

module.exports = {
    hostels
}*/

module.exports = {
    hostels: {
        client: "mysql",
        connection: {
            host: "db-basic",
            user: "root",
            password: "kek",
            database: "hostels",
        },
        migrations: {
            directory: __dirname + "/database/migrations",
        },
        seeds: {
            directory: __dirname + "/database/seeds",
        },
    },
};
