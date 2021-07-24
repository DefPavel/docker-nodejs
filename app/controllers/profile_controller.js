
exports.GetProfileView = async function (req, res){
    await res.render('pages/user-profile', { title: 'Профиль пользователя' });
}