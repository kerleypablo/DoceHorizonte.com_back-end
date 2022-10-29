import TokenServices from '../utils/TokenServices';
import { Iuser, IUserCredentials } from '../interface/IUser';
import { IUserServices } from './interfaces/Iuserservices';
import User from '../database/models/userModel';
import DecryptPassword from '../middleware/DecrryptPassword';

export default class UserServices implements IUserServices<User> {
  private tokenServices = new TokenServices();
  public static async getUserByemail(email: string): Promise<IUserCredentials> {
    const user = await User.findOne({
      where: { email },
    });
    return user as User;
  }

  public static async Autenticate(login: IUserCredentials): Promise<boolean> {
    const user = await UserServices.getUserByemail(login.email);
    if (!user) return false;
    const result = await DecryptPassword.decrypt(login.password, user.password);
    if (!result) return false;
    return true;
  }

  public generateToken(user: User): Promise<string> {
    const token = this.tokenServices.tokenGenerate({ email: user.email, password: user.password });
    return token;
  }

  public async verifyToken(token: string): Promise<User | boolean> {
    const result = await this.tokenServices.tokenAutenticate(token) as Iuser;
    if (!result || null) {
      return false;
    }
    const user = await UserServices.getUserByemail(result.email) as User;
    return user;
  }
}