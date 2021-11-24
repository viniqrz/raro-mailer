import { AddressDTO } from "./AddressDto";

export interface EmployeeDTO {
  firstName: string;
  lastName: string;
  position: string;
  phoneNumber: string;
  email: string;
  department: string;
  actorId: number;
  address: AddressDTO;
  dayOne: Date;
}

export interface UpdateEmployeeDTO {
  firstName?: string;
  lastName?: string;
  position?: string;
  phoneNumber?: string;
  email?: string;
  department?: string;
  actorId?: number;
  address?: AddressDTO;
  dayOne: Date;
}
