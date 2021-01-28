import { MachineRepository } from "@/data/contracts";
import { MachineModel } from "@/data/models";
import { MongoHelper } from "@/infra/data-sources";

export class FakeMachineRepository implements MachineRepository {
  async create(machineModel: MachineModel): Promise<MachineModel> {
    const machineCollection = await MongoHelper.getCollection("machine");
    const machineReturn = await machineCollection.insertOne(machineModel);
    return machineReturn.ops[0];
  }
}
