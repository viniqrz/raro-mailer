import { ActionTemplate } from "../../models/ActionTemplateEntity";

export interface IActionTemplateRepository {
  save(email: ActionTemplate): Promise<ActionTemplate>;
  findAll(): Promise<ActionTemplate[]>;
  findById(id: number): Promise<ActionTemplate>;
  remove(actionTemplate: ActionTemplate): Promise<ActionTemplate>;
}
