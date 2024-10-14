import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appWriteURL).setProject(conf.projectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, username }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        username
      );

      if (userAccount) {
        //making login so user will automatically logged in
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async isLogin() {
    try {
      return this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  }
  async logout() {
    try {
        await account.deleteSessions()
    } catch (error) {
        throw error
    }
  }
}

const authService = new AuthService();

export default authService;
