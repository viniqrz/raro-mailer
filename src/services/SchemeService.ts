import { ISchemeRepository } from "../@types/repositories/ISchemeRepository";
import { Scheme } from "../models/SchemeEntity";
import { Container, Inject, Service } from "typedi";
import { SchemeDTO, UpdateSchemeDTO } from "../@types/dto/SchemeDto";
import { ISchemeService } from "../@types/services/ISchemeService";
import { ActionTemplateService } from "./ActionTemplateService";
import { ActionTemplate } from "../models/ActionTemplateEntity";

@Service("SchemeService")
export class SchemeService implements ISchemeService {
  constructor(
    @Inject("SchemeRepository") private schemeRepository: ISchemeRepository
  ) {}

  public async create(schemeDto: SchemeDTO): Promise<Scheme> {
    try {
      const { name, actionTemplatesIds } = schemeDto;

      const actionTemplates = await this.getTemplates(actionTemplatesIds);
      const scheme = this.schemeFactory(name, actionTemplates);

      const savedScheme = await this.schemeRepository.save(scheme);
      return savedScheme;
    } catch (err) {
      throw new Error(`Couldn't create an scheme: ${err.message}.`);
    }
  }

  public async getAll(): Promise<Scheme[]> {
    return await this.schemeRepository.findAll();
  }

  public async getById(id: number): Promise<Scheme> {
    return await this.schemeRepository.findById(id);
  }

  public async update(id: number, schemeDto: UpdateSchemeDTO) {
    const currentScheme = await this.schemeRepository.findById(id);

    if ("actionTemplatesIds" in schemeDto) {
      currentScheme.actionTemplates = await this.getTemplates(
        schemeDto.actionTemplatesIds
      );
    }

    if ("name" in schemeDto) {
      currentScheme.name = schemeDto.name;
    }

    return await this.schemeRepository.save(currentScheme);
  }

  public async delete(id: number) {
    const schemeToRemove = await this.schemeRepository.findById(id);

    if (!schemeToRemove) throw new Error("Scheme not found!");

    return await this.schemeRepository.remove(schemeToRemove);
  }

  private async getTemplates(idArray: number[]): Promise<ActionTemplate[]> {
    const templateService = Container.get<ActionTemplateService>(
      "ActionTemplateService"
    );

    const templates = idArray.map((id) => templateService.getById(id));

    return Promise.all(templates);
  }

  private schemeFactory(
    name: string,
    actionTemplates: ActionTemplate[]
  ): Scheme {
    const scheme = new Scheme();

    scheme.name = name;
    scheme.actionTemplates = actionTemplates;

    return scheme;
  }
}
