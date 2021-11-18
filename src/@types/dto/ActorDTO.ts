import { Action } from '../../models/ActionEntity';
import { Employee } from '../../models/EmployeeEntity';


export interface  ActorDTO{

  id: number;
  firstName: string;
  lastName: string;
  position: string;
  phoneNumber: string;
  email: string;
  project: string;
  department: string;
  employees: Employee[];
  actions: Action[];
}
