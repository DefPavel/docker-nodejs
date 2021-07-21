const { Router } = require("express");
const router = Router();
const loginController = require("../controllers/login_controller.js");
const homeController = require("../controllers/home_controller.js");


// Роутинг на авторизацию
router.get("/", loginController.getLoginView);
// Роутинг на главную страницу
router.get('/home', homeController.getHomeView);
// Генерация Qrcode
router.post('/scan', homeController.generateQR);

router.get("/test", homeController.getUsers);

module.exports = router;