import { MachineModel } from "@/data/models";

export interface MachineRepository {
  create: (machineModel: MachineModel) => Promise<MachineModel>;
}
