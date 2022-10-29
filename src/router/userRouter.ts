import { Router } from 'express';
import { userController } from './main';
import ValidateLogin from '../middleware/loginMiddlewear';

const user = Router();

user.post('/login', ValidateLogin.login, userController.Autenticate);
user.get('/login/validate', userController.Validate);

export default user;