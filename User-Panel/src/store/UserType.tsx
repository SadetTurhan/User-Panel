export interface User {
    name: string;
    id: number;
    email: string;
    password: string;
    phone: string;
    isActive: boolean;
  }

export interface UserList {
  Users: UserList[]; 
  NewUser: string;
}