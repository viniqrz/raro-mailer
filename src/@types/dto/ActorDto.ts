export interface ActorDTO {
  firstName: string;
  lastName: string;
  position: string;
  phoneNumber: string;
  email: string;
  project: string;
  department: string;
}

export interface UpdateActorDTO {
  firstName?: string;
  lastName?: string;
  position?: string;
  phoneNumber?: string;
  email?: string;
  project?: string;
  department?: string;
}
