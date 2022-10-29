import UserController from '../controller/userController';
import UserServices from '../services/Userservices';

const userServices = new UserServices();
export const userController = new UserController(userServices);


export default { userController };