import { Role } from "./role";

export interface UserCreateDto {
    name: string;
    email: string;
    password: string;
    roleIds: number[];
  }