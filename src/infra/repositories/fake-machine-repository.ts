import { MachineRepository } from "@/data/contracts";
import { MachineModel } from "@/data/models";
import { machine } from "@/infra/data-sources";

export class FakeMachineRepository implements MachineRepository {
    async create (machineModel: MachineModel): Promise<MachineModel> {
        return machine 
    }
}