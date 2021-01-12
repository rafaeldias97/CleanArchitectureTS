import { Machine } from "@/domain/entities";
import { MachineModel } from "@/data/models";

export interface MachineRepository {
    create: (machineModel: MachineModel) => Promise<MachineModel>
}