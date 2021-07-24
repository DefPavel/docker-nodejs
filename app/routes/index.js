const { Router } = require("express");
const router = Router();
const loginController = require("../controllers/login_controller.js");
const homeController = require("../controllers/home_controller.js");
const profileController = require("../controllers/profile_controller.js");

// Роутинг на авторизацию
router.get("/", loginController.getLoginView);
// Роутинг на главную страницу
router.get('/home', homeController.getHomeView);
// Генерация Qrcode
router.post('/scan', homeController.generateQR);
// Тестовый роутинг
router.get("/test", homeController.getUsers);
// Профиль Пользователя
router.get("/profile", profileController.GetProfileView);

module.exports = router;