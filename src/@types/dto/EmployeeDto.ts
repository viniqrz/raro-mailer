export interface EmployeeDTO {
  firstName: string;
  lastName: string;
  position: string;
  phoneNumber: string;
  email: string;
  project: string;
  department: string;
  actorId: number;
}

export interface UpdateEmployeeDTO {
  firstName?: string;
  lastName?: string;
  position?: string;
  phoneNumber?: string;
  email?: string;
  project?: string;
  department?: string;
  actorId?: number;
}
