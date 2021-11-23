import { Bundle } from "../../models/BundleEntity";

export interface IBundleRepository {
  save(bundle: Bundle): Promise<Bundle>;
  remove(bundle: Bundle): Promise<Bundle>;
  findAll(): Promise<Bundle[]>;
  findById(id: number): Promise<Bundle>;
}
