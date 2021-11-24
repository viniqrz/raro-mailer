import { Action } from "../../models/ActionEntity";
import { ActionTemplate } from "../../models/ActionTemplateEntity";
import { Actor } from "../../models/ActorEntity";

export type PairTemplateActor = {
  template: ActionTemplate;
  actor: Actor;
};

export type ActionAndActorDTO = {
  actionId: number;
  actorId: number;
};

export interface BundleDTO {
  id?: number;
  employeeId: number;
  actions: ActionAndActorDTO[];
}

export interface UpdateBundleDTO {
  employeeId?: number;
  actions?: ActionAndActorDTO[];
}
