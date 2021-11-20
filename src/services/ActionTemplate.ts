import { IActionTemplateRepository } from "../@types/repositories/IActionTemplateRepository";
import { ActionTemplate } from "models/ActionTemplateEntity";
import { Inject, Service } from "typedi";

import {
  ActionTemplateDTO,
  UpdateActionTemplateDTO,
} from "../@types/dto/ActionTemplateDto";

import { IActionTemplateService } from "../@types/services/IActionTemplateService";

@Service("ActionTemplateService")
export class ActionTemplateService implements IActionTemplateService {
  constructor(
    @Inject("ActionTemplateRepository")
    private actionTemplateRepository: IActionTemplateRepository
  ) {}

  public async create(
    ActionTemplateDto: ActionTemplateDTO
  ): Promise<ActionTemplate> {
    try {
      const ActionTemplate = this.ActionTemplateFactory(ActionTemplateDto);

      const savedActionTemplate = await this.actionTemplateRepository.save(
        ActionTemplate
      );

      return savedActionTemplate;
    } catch (err) {
      throw new Error(`Couldn't create ActionTemplate: ${err.message}.`);
    }
  }

  public async getAll(): Promise<ActionTemplate[]> {
    return await this.actionTemplateRepository.findAll();
  }

  public async getById(id: number): Promise<ActionTemplate> {
    return await this.actionTemplateRepository.findById(id);
  }

  public async update(
    id: number,
    ActionTemplateDto: UpdateActionTemplateDTO
  ): Promise<ActionTemplate> {
    const currentActionTemplate = await this.actionTemplateRepository.findById(
      id
    );

    const newActionTemplate = {
      ...currentActionTemplate,
      ...ActionTemplateDto,
    };

    return await this.actionTemplateRepository.save(newActionTemplate);
  }

  public async delete(id: number): Promise<ActionTemplate> {
    return await this.actionTemplateRepository.remove({ id } as ActionTemplate);
  }

  private ActionTemplateFactory(
    ActionTemplateDto: ActionTemplateDTO
  ): ActionTemplate {
    const actionTemplate = new ActionTemplate();

    Object.keys(ActionTemplateDto).forEach(
      (key) => (ActionTemplate[key] = ActionTemplateDto[key])
    );

    return actionTemplate;
  }
}
