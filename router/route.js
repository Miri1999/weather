const router = require('express').Router();
const LoginController = require('../controller/login');
const UserController = require('../controller/user');
const HistoryController=require('../controller/history');


//login page
router.post('/login', LoginController.login);
router.post('/createUser', UserController.createUser);
// hestory page
router.get('/getUserHistories/:id', HistoryController.getUserHistories);
router.post('/createNewHistory/:id', HistoryController.createNewHistory);



module.exports = router;