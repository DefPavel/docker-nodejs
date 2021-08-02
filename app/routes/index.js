const { Router } = require("express");
const router = Router();

const loginController = require("../controllers/login_controller.js");

const homeController = require("../controllers/home_controller.js");

const profileController = require("../controllers/profile_controller.js");

const person_hostel_Controller = require("../controllers/person_hostel.js");

// Роутинг на авторизацию
router.get("/", loginController.getLoginView);
// Роутинг на главную страницу
router.get('/home', homeController.getHomeView);
// Список всех заселенных в общежитии
router.get('/hostel/:id_hostel', person_hostel_Controller.getViewTablePerson);
// Тестовый роутинг
router.get("/test", homeController.getHostels);
// Профиль Пользователя
router.get("/profile", profileController.GetProfileView);

module.exports = router;