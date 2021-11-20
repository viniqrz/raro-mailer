import { IHistoryRepository } from "../@types/repositories/IHistoryRepository";
import { History } from "../models/HistoryEntity";
import { Inject, Service } from "typedi";
import { HistoryDTO } from "../@types/dto/HistoryDto";
import { IHistoryService } from "../@types/services/IHistoryService";

@Service("HistoryService")
export class HistoryService implements IHistoryService {
  constructor(
    @Inject("HistoryRepository") private historyRepository: IHistoryRepository
  ) {}

  public async create(historyData: HistoryDTO): Promise<History> {
    try {
      const history = this.historyFactory(historyData);

      const savedHistory = await this.historyRepository.save(history);

      return savedHistory;
    } catch (err) {
      throw new Error(`Couldn't create history: ${err.message}.`);
    }
  }

  public async getAll(): Promise<History[]> {
    return await this.historyRepository.findAll();
  }

  public async getById(id: number): Promise<History> {
    return await this.historyRepository.findById(id);
  }

  async update(id: number, historyData: HistoryDTO) {
    const currentHistory = await this.historyRepository.findById(id);

    const newHistory = { ...currentHistory, ...historyData };

    return await this.historyRepository.save(newHistory);
  }

  async delete(id: number) {
    const historyToRemove = await this.historyRepository.findById(id);
    if (!historyToRemove) {
      throw new Error("History not found!");
    }

    return await this.historyRepository.remove(historyToRemove);
  }

  private historyFactory(historyDto: HistoryDTO): History {
    const history = new History();

    Object.keys(historyDto).forEach((key) => (history[key] = historyDto[key]));

    return history;
  }
}