import BaseService from "./baseService";
import { User } from "../models/user";

class UserService extends BaseService {
  constructor() {
    super();
  }

  async getUsers(): Promise<User[]> {
    try {
      const response = await this.api.get("/users");
      return response.data;
    } catch (error) {
      console.error("Error fetching users", error);
      throw error;
    }
  }

  async getUser(id: string): Promise<User> {
    try {
      const response = await this.api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user", error);
      throw error;
    }
  }

  async updateUser(id: string, userData: User): Promise<User> {
    try {
      const response = await this.api.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error("Error updating user", error);
      throw error;
    }
  }

  async deleteUser(id: string): Promise<void> {
    try {
      await this.api.delete(`/users/${id}`);
    } catch (error) {
      console.error("Error deleting user", error);
      throw error;
    }
  }
}

const userService = new UserService();
export default userService;
