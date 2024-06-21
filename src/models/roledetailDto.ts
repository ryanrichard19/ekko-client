export interface RoleDetailDto {
    id: number;
    name: string;
    children: RoleDetailDto[];
  }
  