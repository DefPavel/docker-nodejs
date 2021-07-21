
// Вернуть View
exports.getLoginView = async function (req, res){
   await res.render('pages/login', { title: 'Авторизация' });
}

// Авторизация
exports.SignIn = function (req, res){
    response.send("Авторизация");
}
// Выход из учетки
exports.LogOut = function (req, res){
    response.send("Выход");
}
