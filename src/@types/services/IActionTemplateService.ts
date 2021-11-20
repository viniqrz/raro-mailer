import {
  ActionTemplateDTO,
  UpdateActionTemplateDTO,
} from "../dto/ActionTemplateDto";

import { ActionTemplate } from "models/ActionTemplateEntity";

export interface IActionTemplateService {
  create(ActionTemplateDto: ActionTemplateDTO): Promise<ActionTemplate>;
  getById(id: number): Promise<ActionTemplate>;
  getAll(): Promise<ActionTemplate[]>;
  update(
    id: number,
    actionTemplateDto: UpdateActionTemplateDTO
  ): Promise<ActionTemplate>;
  delete(id: number): Promise<ActionTemplate>;
}
