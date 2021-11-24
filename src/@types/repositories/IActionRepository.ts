import { Action } from "../../models/ActionEntity";

export interface IActionRepository {
  save(action: Action): Promise<Action>;
  saveMany(actions: Action[]): Promise<Action[]>;
  findAll(): Promise<Action[]>;
  findById(id: number): Promise<Action>;
  remove(action: Action): Promise<Action>;
}
