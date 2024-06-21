import { RoleDetailDto } from '../models/roledetailDto';
import BaseService from './baseService';


class RoleService extends BaseService {
  constructor() {
    super();
  }

  async getRoles(): Promise<RoleDetailDto[]> {
    try {
      const response = await this.api.get('/roles');
      return response.data;
    } catch (error) {
      console.error('Error fetching roles', error);
      throw error;
    }
  }
  
  async getRole(id: string): Promise<RoleDetailDto> {
    try {
      const response = await this.api.get(`/roles/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching role', error);
      throw error;
    }
  }

  async getRoleWithHierarchy (id: string): Promise<RoleDetailDto> {
    try {
      const response = await this.api.get(`/roles/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching role', error);
      throw error;
    }
  };

  async createRole(roleData: Partial<RoleDetailDto>): Promise<RoleDetailDto> {
    try {
      const response = await this.api.post('/roles', roleData);
      return response.data;
    } catch (error) {
      console.error('Error creating role', error);
      throw error;
    }
  }

  async updateRole(id: number, roleData: Partial<RoleDetailDto>): Promise<RoleDetailDto> {
    try {
      const response = await this.api.put(`/roles/${id}`, roleData);
      return response.data;
    } catch (error) {
      console.error('Error updating role', error);
      throw error;
    }
  }

  async deleteRole(id: number): Promise<void> {
    try {
      await this.api.delete(`/roles/${id}`);
    } catch (error) {
      console.error('Error deleting role', error);
      throw error;
    }
  }
}

const roleService = new RoleService();
export default roleService;
