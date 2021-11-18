import { Action } from "models/ActionEntity";
import { ActionDTO, UpdateActionDTO } from "../dto/ActionDto";

export interface IActionService {
  create(actionDto: ActionDTO): Promise<Action>;
  getAll(): Promise<Action[]>;
  getById(id: number): Promise<Action>;
  update(id: number, updateDto: UpdateActionDTO): Promise<Action>;
  delete(id: number): Promise<Action>;
}
