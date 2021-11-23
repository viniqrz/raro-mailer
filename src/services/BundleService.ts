import { IBundleRepository } from "../@types/repositories/IBundleRepository";
import { Bundle } from "../models/BundleEntity";
import Container, { Inject, Service } from "typedi";
import { BundleDTO, UpdateBundleDTO } from "../@types/dto/BundleDto";
import { IBundleService } from "../@types/services/IBundleService";
import { EmployeeService } from "./EmployeeService";

@Service("BundleService")
export class BundleService implements IBundleService {
  constructor(
    @Inject("BundleRepository") private BundleRepository: IBundleRepository
  ) {}

  public async create(bundleDto: BundleDTO): Promise<Bundle> {
    try {
      const bundle = this.BundleFactory(bundleDto);

      const savedBundle = await this.BundleRepository.save(bundle);

      return savedBundle;
    } catch (err) {
      throw new Error(`Couldn't create Bundle: ${err.message}.`);
    }
  }

  public async getAll(): Promise<Bundle[]> {
    return await this.BundleRepository.findAll();
  }

  public async getById(id: number): Promise<Bundle> {
    return await this.BundleRepository.findById(id);
  }

  public async update(id: number, bundleDto: UpdateBundleDTO) {
    const newBundle = { id, ...bundleDto } as unknown;

    if ("employeeId" in bundleDto) {
      const employeeService = Container.get<EmployeeService>("EmployeeService");
      const employee = await employeeService.getById(bundleDto.employeeId);

      if (!employee) throw new Error("There's no employee with this id");

      newBundle["employee"] = employee;
    }

    return await this.BundleRepository.save(newBundle as Bundle);
  }

  public async delete(id: number): Promise<Bundle> {
    return await this.BundleRepository.remove({ id } as Bundle);
  }

  private BundleFactory(BundleDto: BundleDTO): Bundle {
    const bundle = new Bundle();

    Object.keys(BundleDto).forEach((key) => (bundle[key] = BundleDto[key]));

    return bundle;
  }
}
