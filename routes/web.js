import express from 'express'
import LoginController from '../controller/loginController.js'
const router = express.Router();

router.post('/signup',LoginController.createDoc);
router.post('/',LoginController.loginDoc);


export default router;