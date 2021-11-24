import { Action } from "../../models/ActionEntity";
import { UpdateActionDTO } from "../dto/ActionDto";
import { PairTemplateActor } from "../dto/BundleDto";

export interface IActionService {
  generateFromTemplate(pair: PairTemplateActor, dayOne: Date): Promise<Action>;
  getAll(): Promise<Action[]>;
  getById(id: number): Promise<Action>;
  update(id: number, updateDto: UpdateActionDTO): Promise<Action>;
  delete(id: number): Promise<Action>;
}
