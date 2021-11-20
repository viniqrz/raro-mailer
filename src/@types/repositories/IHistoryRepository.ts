import { HistoryDTO } from '../dto/HistoryDto';
import { History } from '../../models/HistoryEntity';

export interface IHistoryRepository {
  save(historyDTO: HistoryDTO): Promise<History>;
  remove(history: History): Promise<History>;
  findAll(): Promise<History[]>;
  findById(id: number): Promise<History>;
}