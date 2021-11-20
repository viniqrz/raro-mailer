import { HistoryDTO } from "../dto/HistoryDto";
import { History } from "../../models/HistoryEntity";

export interface IHistoryService {
  create(historyDto: HistoryDTO): Promise<History>;
  getById(id: number): Promise<History>;
  getAll(): Promise<History[]>;
  update(id: number, historyDto: HistoryDTO): Promise<History>;
  delete(id: number): Promise<History>;
}