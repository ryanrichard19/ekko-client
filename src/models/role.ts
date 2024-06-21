export interface Role {
    id: number;
    name: string;
    children: Role[];
  }