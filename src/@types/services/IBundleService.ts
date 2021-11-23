import { BundleDTO } from "../dto/BundleDto";
import { Bundle } from "../../models/BundleEntity";

export interface IBundleService {
  create(BundleDto: BundleDTO): Promise<Bundle>;
  getById(id: number): Promise<Bundle>;
  getAll(): Promise<Bundle[]>;
  update(id: number, BundleDto: BundleDTO): Promise<Bundle>;
  delete(id: number): Promise<Bundle>;
}
