const hostel = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: 'saint',
        password: 'kek',
        database: process.env.DB_NAME_2,
    },
    migrations: {
        directory: __dirname + '/migrations/hostel',
        tableName: 'migrations',
    },
}

