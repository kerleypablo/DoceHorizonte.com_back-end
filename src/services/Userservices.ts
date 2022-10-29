import TokenServices from '../utils/TokenServices';
import { Iuser, IUserCredentials } from '../interface/IUser';
import { IUserServices } from './interfaces/Iuserservices';
import User from '../database/models/userModel';
import DecryptPassword from '../middleware/DecrryptPassword';

export default class UserServices implements IUserServices<User> {
  private tokenServices = new TokenServices();
  public static async Autenticate(login: IUserCredentials): Promise<boolean> {
   const email = login.email;
    const user = await User.findOne({where: { email },}) as User;
      const result = await DecryptPassword.decrypt(login.password, user.password);
      if (!result) return false;
      return true;
    }
    
  public async getUserByemail(email: string): Promise<User> {
      const user = await User.findOne({
        where: { email },
      });
      return user as User;
    }

  public generateToken(user: User): Promise<string> {
    const token = this.tokenServices.tokenGenerate({ email: user.email, password: user.password });
    return token;
  }

  public async verifyToken(token: string): Promise<boolean> {
    const result = await this.tokenServices.tokenAutenticate(token) as Iuser;
    if (!result || null) {
      return false;
    }
    return true;
  }
}