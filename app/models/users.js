const users = [ {"name": "Василий" , "age": 22}, {"name": "Виталик", "age": 34} ];

module.exports= class User {
 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    save() {
        users.push(this);
    }
    static getAll() {
        return users;
    }
}