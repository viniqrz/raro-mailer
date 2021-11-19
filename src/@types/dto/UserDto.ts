export interface UserDTO {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  position: string;
}

export interface UserWithoutPassword {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
}

export interface UpdateUserDTO {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  position?: string;
}

export interface UserAndToken {
  user: UserWithoutPassword;
  token: string;
}
