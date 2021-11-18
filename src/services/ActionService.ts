import { IActionRepository } from "../@types/repositories/IActionRepository";
import { Inject, Service } from "typedi";
import { Action } from "models/ActionEntity";
import { ActionDTO, UpdateActionDTO } from "../@types/dto/ActionDto";
import { IActionService } from "../@types/services/IActionService";

@Service("ActionService")
export class ActionService implements IActionService {
  constructor(
    @Inject("ActionRepository") private actionRepository: IActionRepository
  ) {}

  public async create(actionDto: ActionDTO): Promise<Action> {
    const action = this.actionFactory(actionDto);

    return await this.actionRepository.save(action);
  }

  public async getAll(): Promise<Action[]> {
    return await this.actionRepository.findAll();
  }

  public async getById(id: number): Promise<Action> {
    return await this.actionRepository.findById(id);
  }

  public async update(id: number, updateDto: UpdateActionDTO): Promise<Action> {
    const currentAction = await this.actionRepository.findById(id);

    const newAction = { ...currentAction, ...updateDto };

    return await this.actionRepository.save(newAction);
  }

  public async delete(id: number): Promise<Action> {
    return await this.actionRepository.remove({ id } as Action);
  }

  private actionFactory(actionDto: ActionDTO): Action {
    const action = new Action();

    Object.keys(actionDto).forEach((key) => (action[key] = actionDto[key]));

    return action;
  }
}
