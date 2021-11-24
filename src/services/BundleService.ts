import { IBundleRepository } from "../@types/repositories/IBundleRepository";
import { Bundle } from "../models/BundleEntity";

import {
  BundleDTO,
  PairTemplateActor,
  UpdateBundleDTO,
  ActionAndActorDTO,
} from "../@types/dto/BundleDto";

import { IBundleService } from "../@types/services/IBundleService";
import { EmployeeService } from "./EmployeeService";
import Container, { Inject, Service } from "typedi";
import { Employee } from "../models/EmployeeEntity";
import { ActionService } from "./ActionService";
import { ActorService } from "./ActorService";
import { Action } from "../models/ActionEntity";
import { ActionTemplateService } from "./ActionTemplateService";

@Service("BundleService")
export class BundleService implements IBundleService {
  constructor(
    @Inject("BundleRepository") private bundleRepository: IBundleRepository
  ) {}

  public async create(bundleDto: BundleDTO): Promise<Bundle> {
    try {
      const { employeeId, actions: actionsData } = bundleDto;

      const employee = await this.getBundleEmployee(employeeId);
      const pairs = await this.getTemplatesAndActors(actionsData);
      const actions = await this.generateActions(pairs, employee.dayOne);

      const bundle = this.BundleFactory(employee, actions);

      const savedBundle = await this.bundleRepository.save(bundle);

      return savedBundle;
    } catch (err) {
      throw new Error(`Couldn't create Bundle: ${err.message}.`);
    }
  }

  public async getAll(): Promise<Bundle[]> {
    return await this.bundleRepository.findAll();
  }

  public async getById(id: number): Promise<Bundle> {
    return await this.bundleRepository.findById(id);
  }

  public async update(id: number, bundleDto: UpdateBundleDTO) {
    const currentBundle = await this.bundleRepository.findById(id);

    if ("employeeId" in bundleDto) {
      const employee = await this.getBundleEmployee(bundleDto.employeeId);
      currentBundle.employee = employee;
    }

    if ("actions" in bundleDto) {
      this.deactivateBundleActions(currentBundle.actions);

      const pairs = await this.getTemplatesAndActors(bundleDto.actions);
      const actions = await this.generateActions(
        pairs,
        currentBundle.employee.dayOne
      );

      currentBundle.actions = actions;
    }

    return await this.bundleRepository.save(currentBundle);
  }

  public async delete(id: number): Promise<Bundle> {
    const bundleToRemove = await this.bundleRepository.findById(id);

    if (!bundleToRemove) throw new Error("Bundle not found!");

    return await this.bundleRepository.remove(bundleToRemove);
  }

  private async generateActions(
    pairs: PairTemplateActor[],
    dayOne: Date
  ): Promise<Action[]> {
    const actionService = Container.get<ActionService>("ActionService");

    const promises = pairs.map((pair) =>
      actionService.generateFromTemplate(pair, dayOne)
    );

    return await Promise.all(promises);
  }

  private async getTemplatesAndActors(
    actionsDto: ActionAndActorDTO[]
  ): Promise<PairTemplateActor[]> {
    const promises = actionsDto.map((aa) => this.getPairTemplateAndActor(aa));

    const pairs = await Promise.all(promises);

    return pairs;
  }

  private async getPairTemplateAndActor(
    actionsDto: ActionAndActorDTO
  ): Promise<PairTemplateActor> {
    const { actionId, actorId } = actionsDto;

    const templateService = Container.get<ActionTemplateService>(
      "ActionTemplateService"
    );
    const actorService = Container.get<ActorService>("ActorService");

    const template = await templateService.getById(actionId);
    if (!template) throw new Error("There's no action template with this id");

    if (!actorId) return { template, actor: null };

    const actor = await actorService.getById(actorId);
    if (!actor) throw new Error("There's no actor with this id");

    return { template, actor };
  }

  private async getBundleEmployee(id: number): Promise<Employee> {
    const employeeService = Container.get<EmployeeService>("EmployeeService");
    const employee = await employeeService.getById(id);

    if (!employee) throw new Error("There's no employee with this id");

    return employee;
  }

  private async deactivateBundleActions(actions: Action[]): Promise<void> {
    const actionService = Container.get<ActionService>("ActionService");

    await actionService.deactivate(actions);
  }

  private BundleFactory(employee: Employee, actions: Action[]): Bundle {
    const bundle = new Bundle();

    bundle.employee = employee;
    bundle.actions = actions;

    return bundle;
  }
}
