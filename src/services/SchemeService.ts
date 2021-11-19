import { ISchemeRepository } from "../@types/repositories/ISchemeRepository";
import { Scheme } from "models/SchemeEntity";
import { Inject, Service } from "typedi";
import { SchemeDTO } from "../@types/dto/SchemeDto";
import { ISchemeService } from "../@types/services/ISchemeService";

@Service("SchemeService")
export class SchemeService implements ISchemeService {
  constructor(
    @Inject("SchemeRepository") private schemeRepository: ISchemeRepository
  ) {}

  public async create(schemeData: SchemeDTO): Promise<Scheme> {
    try {
      const scheme = this.schemeFactory(schemeData);

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

  async update(schemeData: SchemeDTO) {
    const currentScheme = await this.schemeRepository.findById(schemeData.id);

    const newScheme = { ...currentScheme, ...schemeData };

    return await this.schemeRepository.save(newScheme);
  }

  async delete(id: number) {
    const schemeToRemove = await this.schemeRepository.findById(id);
    if (!schemeToRemove) {
      throw new Error('Scheme not found!');
    }

    return await this.schemeRepository.remove(schemeToRemove);
  }

  private schemeFactory(schemeDto: SchemeDTO): Scheme {
    const scheme = new Scheme();

    Object.keys(schemeDto).forEach((key) => (scheme[key] = schemeDto[key]));

    return scheme;
  }
}