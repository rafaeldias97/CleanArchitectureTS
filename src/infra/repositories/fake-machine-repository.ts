import { MachineRepository } from '@/data/contracts';
import { MachineModel } from '@/data/models';
import { MongoHelper } from '@/infra/data-sources';

export class FakeMachineRepository implements MachineRepository {
  mongoHelper;

  constructor() {
    this.mongoHelper = MongoHelper;
  }

  async create(machineModel: MachineModel): Promise<MachineModel> {
    const machineCollection = this.mongoHelper.getCollection('machine');
    const machineReturn = await machineCollection.insertOne(machineModel);
    return machineReturn.ops[0];
  }
}
