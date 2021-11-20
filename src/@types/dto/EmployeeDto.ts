export interface EmployeeDTO {
  firstName: string;
  lastName: string;
  position: string;
  phoneNumber: string;
  email: string;
  project: string;
  department: string;
}

export interface UpdateEmployeeDTO {
  firstName?: string;
  lastName?: string;
  position?: string;
  phoneNumber?: string;
  email?: string;
  project?: string;
  department?: string;
}
