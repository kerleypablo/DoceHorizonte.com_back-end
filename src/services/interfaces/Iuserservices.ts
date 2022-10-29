export interface IUserServices<T> {
    generateToken(login: T): Promise<string>;
    verifyToken(token: string): Promise<boolean>;
    getUserByemail(email: string): Promise<T>;
  }