type ActionActor = {
  actionId: number;
  actorId: number;
};

export interface BundleDTO {
  id?: number;
  employeeId: number;
  actions: ActionActor[];
}

export interface UpdateBundleDTO {
  employeeId?: number;
  actions?: ActionActor[];
}
